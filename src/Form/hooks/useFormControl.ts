import React from 'react';
import type { Driver } from '../utils';

export const INTERNAL_TOKEN = Symbol('FormControlToken');

export class FormControl<Value = any> {
  private driver?: Driver<Value>;

  public internalHooks = (token: typeof INTERNAL_TOKEN) => {
    if (token === INTERNAL_TOKEN) {
      return {
        setDriver: (driver?: Driver) => {
          this.driver = driver;
        },
        removeDriver: () => {
          this.driver = undefined;
        },
      };
    }
    // eslint-disable-next-line no-console
    console.warn('For internal use only');
  };

  public getFieldsValue = () => {
    return this.driver?.getValue();
  };
}

export interface PropsWithControl<Value = any> {
  control?: FormControl<Value>;
}

export const useFormControl = (control?: FormControl) => {
  const ref = React.useRef(control);

  if (!ref.current) {
    ref.current = new FormControl();
  }

  return ref.current;
};
