import React from 'react';
import { FormRootProvider } from './Context';
import type { Control } from './control';
import { FormItem } from './Item';
import { useControl } from './useControl';

export interface FormProps {
  children?: React.ReactNode;
  control?: Control;
}
interface FormType {
  (props: FormProps): React.JSX.Element;
  Item: typeof FormItem;
  useControl: typeof useControl;
}
const Form: FormType = (props: FormProps) => {

  const { children, control } = props;

  return (
    <FormRootProvider
      control={control}
    >{children}</FormRootProvider>
  );
};

Form.Item = FormItem;
Form.useControl = useControl;

export { Form };
