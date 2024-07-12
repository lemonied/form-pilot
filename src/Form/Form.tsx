import React from 'react';
import { FormRootProvider } from './Context';
import type { Control } from './control';
import { FormItem } from './Item';
import { useControl } from './useControl';
import { useOnValueChange, useSyncValue } from './useValue';

export interface FormProps {
  children?: React.ReactNode;
  control?: Control;
}
interface FormType {
  (props: FormProps): React.JSX.Element;
  Item: typeof FormItem;
  useControl: typeof useControl;
  useOnValueChange: typeof useOnValueChange;
  useSyncValue: typeof useSyncValue;
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
Form.useOnValueChange = useOnValueChange;
Form.useSyncValue = useSyncValue;

export { Form };
