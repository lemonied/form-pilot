import React from 'react';
import { ChangeType, type Driver } from '../utils';

export const INTERNAL_TOKEN = Symbol('FormControlToken');

export class Control<Value = any> {
  
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

  public getValue = () => {
    return this.driver?.getValue();
  };

  public watchValue = (fn: (value?: Value) => any) => {
    return this.driver?.watch(evt => {
      if (evt.type === ChangeType.Value) {
        fn(this.getValue());
      }
    });
  };

  public reset = () => {
    return this.driver?.reset();
  };

}

export interface PropsWithControl<Value = any> {
  control?: Control<Value>;
}

export const useControl = (control?: Control) => {
  const ref = React.useRef(control);

  if (!ref.current) {
    ref.current = new Control();
  }

  return ref.current;
};

export const useValue = (control?: Control) => {
  const [state, setState] = React.useState(() => control?.getValue());

  React.useEffect(() => {
    return control?.watchValue((value) => {
      setState(value);
    });
  }, [control]);

  return state;

};
