import React from 'react';
import { useControl } from '../hooks';
import { DriverType } from '../utils';
import { FormDriverContext, useDriver } from './DriverContext';
import { FormControl } from './Control';
import type { SharedControlProps } from './Control';
import { FormGroup } from './Group';

interface FormProps<Value = any> extends SharedControlProps<Value> {
  children?: React.ReactNode;
}
interface FormType {
  <Values = any>(props: FormProps<Values>): React.JSX.Element;
  Control: typeof FormControl;
  Group: typeof FormGroup;
  useControl: typeof useControl;
}
const Form: FormType = (props: FormProps) => {
  const { name = 'form', control, initialValue, children } = props;

  const driver = useDriver({
    type: DriverType.Group,
    root: true,
    name,
    control,
    initialValue,
  });

  return (
    <FormDriverContext.Provider value={driver}>
      {children}
    </FormDriverContext.Provider>
  );
};

Form.Control = FormControl;
Form.Group = FormGroup;
Form.useControl = useControl;

export { Form };
