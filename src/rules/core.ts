import { STORE_INTERNAL_TOKEN } from '../utils/constants';
import type { InternalControl } from '../hooks/store';
import type { Control, Rule, ValidateMode, ValidateType, ValidationError, Variable } from '../utils/interface';

export function replaceMessage(template: string, kv: Variable): string {
  return template.replace(/\\?\$\{\w+\}/g, (str: string) => {
    if (str.startsWith('\\')) {
      return str.slice(1);
    }
    const key = str.slice(2, -1);
    return `${kv[key] ?? ''}`;
  });
}

export interface IntrinsicRuleParams extends Omit<Rule, 'validator'> {
  message?: string;
}

export class IntrinsicRuleError {
  public message?: string;
  public variable?: Variable;
  constructor(params?: IntrinsicRuleError) {
    Object.assign(this, params);
  }
}

export class IntrinsicRule {

  public defaultMessage: string;

  public name: string;

  constructor(params: Pick<IntrinsicRule, 'name' | 'defaultMessage'>) {
    this.defaultMessage = params.defaultMessage;
    this.name = params.name;
  }

  public setDefaultMessage = (defaultMessage: string) => {
    this.defaultMessage = defaultMessage;
  };

  public factory<T extends (...args: any[]) => Rule>(fn: T) {
    const ret = ((...args: Parameters<T>) => {
      const rule = fn(...args);
      const mergedRule: Rule = {
        ...rule,
        validator: async (control) => {
          try {
            return await rule.validator(control);
          } catch (err) {
            if (err instanceof Error) {
              throw err;
            }
            const message = (() => {
              if (err instanceof IntrinsicRuleError) {
                if (typeof err.message === 'string') {
                  return err.message;
                }
                const validateMessage = (control as InternalControl).getStore(STORE_INTERNAL_TOKEN).validateMessages?.[this.name];
                return replaceMessage(validateMessage ?? this.defaultMessage, {
                  name: control.getFullName()?.join(','),
                  ...err.variable,
                });
              }
              if (typeof err === 'string') {
                return err;
              }
              return `${err}`;
            })();
            throw new Error(message);
          }
        },
      };
      return mergedRule;
    }) as (T & Pick<IntrinsicRule, 'setDefaultMessage' | 'defaultMessage' | 'name'>);
    ret.setDefaultMessage = this.setDefaultMessage;
    Object.defineProperty(ret, 'defaultMessage', {
      get: () => this.defaultMessage,
    });
    Object.defineProperty(ret, 'name', {
      get: () => this.name,
    });
    return ret;
  }
}

class ValidationErrorEntity implements ValidationError {
  public type!: ValidateType;
  public message!: string;
  public control!: Control;
  constructor(params: ValidationError) {
    Object.assign(this, params);
  }
}

export const executeRules = async (control: Control, mode: ValidateMode = 'serial', rules?: Omit<Rule, 'validateTrigger'>[]) => {
  if (rules) {
    const exec = async (rule: NonNullable<typeof rules>[number]) => {
      try {
        await rule.validator(control);
      } catch (e) {
        const message = e instanceof Error ? e.message : `${e}`;
        return new ValidationErrorEntity({
          type: rule.type || 'error',
          message,
          control,
        });
      }
    };
    let results: ValidationError[] = [];
    if (mode === 'serial') {
      for (const rule of rules) {
        const result = await exec(rule);
        if (result instanceof ValidationErrorEntity) {
          results.push(result);
          if (result.type === 'error') {
            break;
          }
        }
      }
    } else {
      results = (await Promise.all(rules.map(exec))).filter(result => result instanceof ValidationErrorEntity) as ValidationError[];
    }
    if (results.length > 0) {
      throw results;
    }
  }
};
