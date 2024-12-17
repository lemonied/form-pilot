import { IntrinsicRule, IntrinsicRuleError } from './core';
import type { IntrinsicRuleParams } from './core';

const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/;

const rule = new IntrinsicRule('"${name}" is not a valid email');

export const email = rule.factory((params?: IntrinsicRuleParams) => {
  const { message, ...rest } = params || {};
  return {
    ...rest,
    validator(control) {
      const value = control.getValue();
      if (!pattern.test(value)) {
        return Promise.reject(new IntrinsicRuleError({
          message,
        }));
      }
      return Promise.resolve();
    },
  };
});
