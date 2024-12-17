import { IntrinsicRule, IntrinsicRuleError } from './core';
import type { IntrinsicRuleParams } from './core';

const maxLengthRule = new IntrinsicRule('"${name}" can contain up to ${length} characters');

export const maxLength = maxLengthRule.factory((max: number, params?: IntrinsicRuleParams) => {
  const { message, ...rest } = params || {};
  return {
    ...rest,
    validator(control) {
      const value = control.getValue();
      if (
        (typeof value === 'string' || Array.isArray(value)) &&
        value.length > max
      ) {
        return Promise.reject(new IntrinsicRuleError({
          message,
          variable: {
            length: max,
          },
        }));
      }
      return Promise.resolve();
    },
  };
});

const minLengthRule = new IntrinsicRule('"${name}" must be at least ${length} characters');

export const minLength = minLengthRule.factory((min: number, params?: IntrinsicRuleParams) => {
  const { message, ...rest } = params || {};
  return {
    ...rest,
    validator(control) {
      const value = control.getValue();
      const valueLength = typeof value === 'string' || Array.isArray(value) ? value.length : `${value ?? ''}`.length;
      if (valueLength < min) {
        return Promise.reject(new IntrinsicRuleError({
          message,
          variable: {
            length: min,
          },
        }));
      }
      return Promise.resolve();
    },
  };
});
