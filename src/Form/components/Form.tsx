import React from 'react';
import type { FormControl } from '../hooks';
import { useFormControl } from '../hooks';
import { DriverType } from '../utils';
import { FormDriverContext, useCreateDriver } from './DriverContext';
import { FormField } from './Field';
import { FormGroup } from './Group';

interface FormProps<Value = any> {
  name?: string;
  control?: FormControl<Value>;
  children?: React.ReactNode;
}
interface FormType {
  <Values = any>(props: FormProps<Values>): React.JSX.Element;
  Field: typeof FormField;
  Group: typeof FormGroup;
  useControl: typeof useFormControl;
}
const Form: FormType = (props: FormProps) => {
  const { name = 'form', control, children } = props;

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

Form.Field = FormField;
Form.Group = FormGroup;
Form.useControl = useFormControl;

export { Form };
