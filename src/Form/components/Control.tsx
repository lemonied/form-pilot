import React from 'react';
import { useControl, useValue, type Control } from '../hooks';
import type { NamePath } from '../utils';
import {
  ChangeType,
  DriverType,
  getValueFromEvent,
} from '../utils';
import { FormDriverContext, useDriver } from './DriverContext';

export interface SharedControlProps<Value = any> {
  name?: NamePath;
  initialValue?: Value;
  control?: Control<Value>;
}

export interface FormControlProps extends SharedControlProps {
  children?: React.ReactNode;
}
export const FormControl = React.memo((props: FormControlProps) => {
  const { children, name, initialValue, control, ...extra } = props;

  const driver = useDriver({
    type: DriverType.Control,
    initialValue,
    name,
    control,
  });

  const hasValue = 'value' in props;
  const propsValue = (props as any).value;
  const onChange = () => {
    const val = driver.getValue();
    if (val !== propsValue) {
      (props as any).onChange?.(val);
    }
  };
  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  const watchValue = useValue(useControl(control));
  const value = hasValue ? propsValue : watchValue;

  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    return driver.watch((evt) => {
      if (evt.type === ChangeType.Value) {
        onChangeRef.current();
      } else if (evt.type === ChangeType.Reset) {
        setKey(pre => pre + 1);
      }
    });
  }, [driver]);

  React.useEffect(() => {
    if (hasValue) {
      driver.setValue(propsValue);
    }
  }, [propsValue, hasValue, driver]);

  if (React.isValidElement<any>(children)) {
    return (
      <FormDriverContext.Provider value={driver}>
        {React.cloneElement(children, {
          ...extra,
          key,
          value: value ?? (children.type === 'input' ? '' : value),
          onChange(...args: any[]) {
            const val = getValueFromEvent('value', args[0]);
            driver.setValue(val);
            return children.props.onChange?.(...args);
          },
        })}
      </FormDriverContext.Provider>
    );
  }

  return (
    <>{children}</>
  );

});
