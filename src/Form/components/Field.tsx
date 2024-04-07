import React from 'react';
import type { FormControl } from '../hooks';
import type { NamePath } from '../utils';
import {
  ChangeType,
  DriverType,
  TriggerType,
  getValueFromEvent,
} from '../utils';
import { FormDriverContext, useCreateDriver } from './DriverContext';

export interface FormFieldProps {
  children?: React.ReactNode;
  name?: NamePath;
  initialValue?: any;
  control?: FormControl;
}
export const FormField = (props: FormFieldProps) => {
  const { children, name, initialValue, control } = props;

  const driver = useCreateDriver({
    type: DriverType.Field,
    name,
    initialValue,
    control,
  });
  const [value, setValue] = React.useState(() => driver?.getValue());

  React.useEffect(() => {
    setValue(driver?.getValue());
    return driver?.watch((evt) => {
      if (evt.type === ChangeType.Value) {
        setValue(evt.current);
      }
    });
  }, [driver]);

  if (React.isValidElement(children) && driver) {
    return (
      <FormDriverContext.Provider value={driver}>
        {React.cloneElement(children as any, {
          value,
          onChange(...args: any[]) {
            const val = getValueFromEvent('value', args[0]);
            driver.triggerValueChange(val, TriggerType.Event);
            return (children.props as any).onChange?.(...args);
          },
        })}
      </FormDriverContext.Provider>
    );
  }

  return <>{children}</>;
};
