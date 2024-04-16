import React from 'react';
import { DriverType } from '../utils';
import { FormDriverContext, useDriver } from './DriverContext';
import type { SharedControlProps } from './Control';

export interface FormGroupProps extends SharedControlProps {
  children?: React.ReactNode;
}
export const FormGroup = (props: FormGroupProps) => {
  const { children, name, control, initialValue } = props;

  const driver = useDriver({
    type: DriverType.Group,
    name,
    control,
    initialValue,
  });

  return (
    <FormDriverContext.Provider
      value={driver}
    >{children}</FormDriverContext.Provider>
  );
};
