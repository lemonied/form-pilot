import { IntrinsicRule, IntrinsicRuleError } from './core';
import type { IntrinsicRuleParams } from './core';

const rule = new IntrinsicRule('"${name}" is required');

export const required = rule.factory((params?: IntrinsicRuleParams) => {
  const { message, ...rest } = params || {};
  return {
    ...rest,
    validator(control) {
      const value = control.getValue();
      if (
        typeof value === 'undefined' ||
        value === null ||
        value === '' ||
        (Array.isArray(value) && value.length === 0)
      ) {
        return Promise.reject(new IntrinsicRuleError({
          message,
        }));
      }
      return Promise.resolve();
    },
  };
});
