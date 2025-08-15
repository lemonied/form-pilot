import { STORE_INTERNAL_TOKEN } from '../utils/constants';
import type { Control, NamePaths, NonNullableNamePaths, Rule, ValidateOptions, ValidationError } from '../utils/interface';
import { FormStoreType } from '../utils/interface';
import { matchPaths, toNamePaths } from '../utils/pathUtil';
import { Subscriber } from '../utils/subscriber';
import { basePick, get, isPlainObject, set } from '../utils/valueUtil';

const controlSymbol = Symbol('control');

interface SetData {
  value?: any;
  preventCapturing?: boolean;
  preventBubbling?: boolean;
  eventInterceptor?: (emit: () => void) => void;
}

export interface ValueChangeParameter<T = any> {
  newValue: T;
  oldValue: T;
}

export type ListChangeParameter = {
  type: 'add';
  value: any;
  insertIndex?: number;
} | {
  type: 'remove';
  index: number;
} | {
  type: 'move';
  from: number;
  to: number;
};

export class FormStore {

  private lock = false;

  public type: FormStoreType = FormStoreType.Item;

  public parent?: FormStore;

  public children: Set<FormStore> = new Set();

  public value: any;

  public initialValue: any;

  public namePaths!: NonNullableNamePaths;

  public touched = false;

  private validator: Rule['validator'] = () => Promise.resolve();
  public validating?: Promise<any>;
  public validationChange = new Subscriber<FormStore['validating']>();
  public validationErrors?: ValidationError[];
  public validateMessages?: Record<string, string>;

  public valueChange = new Subscriber<ValueChangeParameter>();
  public listChange = new Subscriber<ListChangeParameter>();
  public resetChange = new Subscriber<void>();

  /**
   * Unique ID
   */
  public stamp: any = undefined;

  private _init = false;
  public init(options: { namePaths: NonNullableNamePaths; value?: any; }) {
    this.initialValue = options.value;
    /**
     * Can only be initialized once
     */
    if (this._init) {
      return;
    }
    this.namePaths = options.namePaths;

    if (this.parent) {
      this.setData({
        value: get(this.parent.value, this.namePaths)[0],
      });
    } else {
      this.setData({
        value: this.getInitialValue(),
      });
    }

    this._init = true;
  }

  public getInitialValue(): any {
    if (this.parent) {
      return get(this.parent.getInitialValue(), this.namePaths)[0];
    }
    return this.initialValue;
  }

  public getInitializedValue() {
    if (this.type === FormStoreType.List && !Array.isArray(this.value)) {
      return [];
    }
    if (this.type === FormStoreType.Group && !isPlainObject(this.value)) {
      return Object.assign({}, this.value);
    }
    return this.value;
  }

  public setNamePaths(namePaths: NonNullableNamePaths) {
    this.namePaths = namePaths;
    if (this.parent) {
      this.setData({
        value: get(this.parent.value, this.namePaths)[0],
      });
    }
  }

  public setValidator = (validator?: typeof this.validator) => {
    if (validator) {
      this.validator = validator;
    } else {
      this.validator = () => Promise.resolve();
    }
  };

  public setData(options: SetData) {

    if (this.lock) {
      return;
    }
    this.lock = true;

    const { eventInterceptor, preventCapturing, preventBubbling } = options;

    let newValue = options.value;

    const oldValue = this.value;

    const triggers: (() => void)[] = [];

    if (!preventBubbling && this.parent && !this.parent.lock) {
      /**
       * Broadcast upward
       */
      let nextParentValue = this.parent.value;

      const [oldValueFromParent] = get(this.parent.value, this.namePaths);
      if (!Object.is(oldValueFromParent, newValue)) {
        nextParentValue = set(
          this.parent.getInitializedValue(),
          this.namePaths,
          newValue,
        );
      }
      this.parent.setData({
        value: nextParentValue,
        eventInterceptor(emit) {
          triggers.push(emit);
        },
      });
    }

    /**
     * Assign value
     */
    this.value = newValue;

    if (!Object.is(this.value, oldValue)) {
      /**
       * value has changed
       */
      triggers.push(() => this.valueChange.trigger({ newValue, oldValue }));

      if (!preventCapturing) {
        this.children.forEach(child => {
          if (!child.lock) {
            child.setData({
              value: get(this.value, child.namePaths)[0],
              eventInterceptor(emit) {
                triggers.push(emit);
              },
            });
          }
        });
      }

    }

    if (typeof eventInterceptor === 'function') {
      eventInterceptor(() => triggers.forEach(fn => fn()));
    } else {
      triggers.forEach(fn => fn());
    }

    this.lock = false;
  }

  public getStrictValue: Control['getStrictValue'] = (name) => {
    if (this.type === FormStoreType.Item) {
      return this.value;
    }
    let value: any;
    const nameList = name?.map(toNamePaths) as (NonNullableNamePaths[] | undefined);
    const currentValue = this.getInitializedValue();
    const recursion = (stores: Set<FormStore>, prefix: NamePaths = []) => {
      stores.forEach(store => {
        const relativeNamePaths = [...prefix, ...store.namePaths];
        if (
          store.type === FormStoreType.Item &&
          (!nameList || nameList.some(namePath => !namePath || matchPaths(namePath, relativeNamePaths)))
        ) {
          value = basePick(
            currentValue,
            relativeNamePaths,
            value,
          );
        }
        recursion(store.children, relativeNamePaths);
      });
    };
    recursion(this.children);
    return value;
  };

  public getName: Control['getName'] = () => {
    if (this.parent) {
      return this.namePaths;
    }
  };

  public getFullName: Control['getFullName'] = () => {
    if (this.parent) {
      return [
        ...(this.parent.getFullName() || []),
        ...this.namePaths,
      ];
    }
  };

  public triggerValidationChange = () => {
    this.validationChange.trigger(this.validating);
    if (this.validating) {
      this.validating.catch(e => this.validationErrors = e);
    } else {
      this.validationErrors = undefined;
    }
  };

  public validateByEvent = (validator?: typeof this.validator) => {
    const _validator = typeof validator === 'function' ? validator : this.validator;
    this.validating = _validator(this.internalControl);
    this.triggerValidationChange();
  };

  public validateOptionalThrow = async (options?: ValidateOptions) => {
    const { thrownTypes = ['error'] } = options || {};
    this.validating = this.validator(this.internalControl);
    this.triggerValidationChange();
    try {
      await this.validating;
    } catch (e) {
      const results = (e as ValidationError[]).filter(result => thrownTypes.includes(result.type));
      if (results.length) {
        throw results;
      }
    }
  };

  public validate: Control['validate'] = async (options) => {
    await this.validateOptionalThrow(options);
    return this.getStrictValue();
  };

  public clearValidation: Control['clearValidation'] = () => {
    this.validating = undefined;
    this.triggerValidationChange();
    this.children.forEach(child => child.clearValidation());
  };

  public validateFields: Control['validateFields'] = async (name, options) => {

    const promises: (() => Promise<void>)[] = [];

    const recursion = (store: FormStore, _name?: typeof name, _options?: typeof options) => {
      const nameList = _name?.map(toNamePaths) as (NonNullableNamePaths[] | undefined);
      const { recursive } = _options || {};
      if (!nameList) {
        promises.push(() => store.validateOptionalThrow(options));
        store.children.forEach(child => recursion(child));
        return;
      }
      if (!nameList.length) {
        return;
      }
      if (nameList.some(namePath => !namePath)) {
        promises.push(() => store.validateOptionalThrow(options));
        if (recursive) {
          store.children.forEach(child => recursion(child));
          return;
        }
      }
      store.children.forEach(child => {
        const matchs = nameList.filter(namePath => matchPaths(child.namePaths, namePath));
        recursion(child, matchs.map(match => match.slice(child.namePaths.length)), _options);
      });
    };

    recursion(this, name, options);

    const results: ValidationError[] = (await Promise.all(promises.map(fn => fn().catch(e => e)))).filter(Boolean);
    if (results.length) {
      throw results;
    }
    
    return this.getStrictValue(name);
  };

  public getValidationErrors: Control['getValidationErrors'] = () => {

    const validationErrors = this.validationErrors?.slice() || [];

    this.children.forEach(child => {
      const errors = child.getValidationErrors();
      if (errors) {
        validationErrors.push(...errors);
      }
    });

    if (validationErrors.length) {
      return validationErrors;
    }

  };

  public manualSetValue: Control['setValue'] = (value) => {
    this.setData({ value });
    this.clearValidation();
    return this.value;
  };

  public setFieldValue: Control['setFieldValue'] = (name, value) => {
    const namePaths = toNamePaths(name);
    if (!namePaths || this.type === FormStoreType.Item) {
      return;
    }
    const control = this.get(namePaths);
    if (control) {
      control.setValue(value);
    } else {
      this.setData({
        value: set(
          this.getInitializedValue(),
          namePaths,
          value,
        ),
      });
    }
  };

  public isTouched: Control['isTouched'] = () => {
    if (this.type === FormStoreType.Item || this.touched) {
      return this.touched;
    }
    return Array.from(this.children).some(child => child.isTouched());
  };

  public reset = (preventBubbling = false, callbacks: (() => void)[] = []) => {
    this.setData({
      value: this.getInitialValue(),
      preventCapturing: true,
      preventBubbling,
      eventInterceptor(emit) {
        callbacks.push(emit);
      },
    });
    this.touched = false;
    this.children.forEach(child => child.reset(true, callbacks));
    callbacks.push(() => this.resetChange.trigger());
    callbacks.forEach(cb => cb());
  };

  public triggerReset: Control['reset'] = () => {
    this.reset();
    this.clearValidation();
  };

  public add: Control['add'] = (initialValue, insertIndex) => {
    if (this.type !== FormStoreType.List) {
      throw new Error(`${this.type} has no method add.`);
    }
    this.listChange.trigger({
      type: 'add',
      value: initialValue,
      insertIndex,
    });
  };

  public remove: Control['remove'] = (index) => {
    if (this.type !== FormStoreType.List) {
      throw new Error(`${this.type} has no method remove.`);
    }
    this.listChange.trigger({
      type: 'remove',
      index,
    });
  };

  public move: Control['move'] = (from, to) => {
    if (this.type !== FormStoreType.List) {
      throw new Error(`${this.type} has no method move.`);
    }
    this.listChange.trigger({
      type: 'move',
      from,
      to,
    });
  };

  public get: Control['get'] = (name) => {
    const namePaths = toNamePaths(name);
    if (namePaths) {
      for (const child of Array.from(this.children)) {
        if (matchPaths(child.namePaths, namePaths)) {
          const childValue = child.get(namePaths.slice(child.namePaths.length));
          if (childValue) {
            return childValue;
          }
        }
      }
      return undefined;
    }
    return this.internalControl;
  };

  public control: Control = {
    getValue: () => this.value,
    getStrictValue: this.getStrictValue,
    getName: this.getName,
    getFullName: this.getFullName,
    setValue: this.manualSetValue,
    setFieldValue: this.setFieldValue,
    isTouched: this.isTouched,
    reset: this.triggerReset,
    validate: this.validate,
    validateFields: this.validateFields,
    getValidationErrors: this.getValidationErrors,
    clearValidation: this.clearValidation,
    add: this.add,
    remove: this.remove,
    move: this.move,
    get: this.get,
    getStoreStype: () => this.type,
  };

  public internalControl = {
    ...this.control,
    getStore: (token: string): FormStore => {
      if (token === STORE_INTERNAL_TOKEN) {
        return this;
      }
      // eslint-disable-next-line no-console
      throw new Error('For internal use only');
    },
    [controlSymbol]: true,
  };

}

export type InternalControl = FormStore['internalControl'];

export function isInternalControl(input: unknown): input is InternalControl {
  return !!input && typeof input === 'object' && !!(input as any)[controlSymbol];
}
