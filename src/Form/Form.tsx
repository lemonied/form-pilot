import React from 'react';
import { FormRootProvider } from './Context';
import type { Control } from './control';

export interface FormProps {
  children?: React.ReactNode;
  control?: Control;
}
export const Form = (props: FormProps) => {

  const { children, control } = props;

  return (
    <FormRootProvider
      control={control}
    >{children}</FormRootProvider>
  );
};
