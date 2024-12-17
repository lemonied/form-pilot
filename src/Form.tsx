import React from 'react';
import FormControl, {
  useControl,
} from './hooks/Control';
import { STORE_INTERNAL_TOKEN } from './hooks/store';
import type { InternalControl } from './hooks/store';
import type { SharedControlProps } from './hooks/Control';
import FormGroup from './Group';
import FormList from './List';
import FormItem from './Item';
import { useOnValueChange, useWatch } from './hooks/useValue';
import { useValidation } from './hooks/useValidation';
import { UpdateRender, ValidationRender } from './Render';
import { useControlInstance } from './hooks/useContext';

export interface FormProps extends Omit<SharedControlProps, 'initialValue' | 'name'> {
  initialValues?: any;
}

interface FormType {
  (props: FormProps): React.ReactNode;
  Item: typeof FormItem;
  Group: typeof FormGroup;
  List: typeof FormList;
  useControl: typeof useControl;
  useControlInstance: typeof useControlInstance;
  useOnValueChange: typeof useOnValueChange;
  useWatch: typeof useWatch;
  useValidation: typeof useValidation;
  Validation: typeof ValidationRender;
  Update: typeof UpdateRender;
  
}

const Form: FormType = (props) => {

  const { initialValues, control: _control, ...restProps } = props;

  const control = useControl(_control) as InternalControl;
  control.getStore(STORE_INTERNAL_TOKEN).type = 'group';

  return (
    <FormControl
      {...restProps}
      control={control}
      name={undefined}
      initialValue={initialValues}
      root
    />
  );
};

Form.Item = FormItem;
Form.Group = FormGroup;
Form.List = FormList;
Form.useControl = useControl;
Form.useOnValueChange = useOnValueChange;
Form.useWatch = useWatch;
Form.useControlInstance = useControlInstance;
Form.useValidation = useValidation;
Form.Validation = ValidationRender;
Form.Update = UpdateRender;

export default Form;
