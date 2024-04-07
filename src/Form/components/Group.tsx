import React from 'react';
import type { FormControl } from '../hooks';
import type { NamePath } from '../utils';
import { DriverType } from '../utils';
import { FormDriverContext, useCreateDriver } from './DriverContext';

export interface FormGroupProps {
  children?: React.ReactNode;
  name?: NamePath;
  control?: FormControl;
}
export const FormGroup = (props: FormGroupProps) => {
  const { children, name, control } = props;

  const driver = useCreateDriver({
    type: DriverType.Group,
    name,
    control,
  });

  return (
    <FormDriverContext.Provider value={driver}>
      {children}
    </FormDriverContext.Provider>
  );
};
