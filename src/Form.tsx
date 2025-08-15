import React from 'react';
import FormControl, {
  useControl,
} from './core/Control';
import { STORE_INTERNAL_TOKEN } from './utils/constants';
import type { InternalControl } from './core/store';
import type { SharedControlProps } from './core/Control';
import FormGroup from './Group';
import FormList from './List';
import FormItem from './Item';
import { useOnValueChange, useWatch } from './core/useValue';
import { useValidation } from './core/useValidation';
import { UpdateRender, ValidationRender } from './Render';
import { useControlInstance } from './core/useContext';
import { ConfigProvider, useConfig } from './core/ConfigProvider';
import { FormStoreType } from './utils/interface';

export interface FormProps extends Omit<SharedControlProps, 'initialValue'> {
  initialValues?: any;
}

interface FormType {
  (props: FormProps): React.ReactNode;
  Item: typeof FormItem;
  Group: typeof FormGroup;
  List: typeof FormList;
  ConfigProvider: typeof ConfigProvider;
  useControl: typeof useControl;
  useControlInstance: typeof useControlInstance;
  useOnValueChange: typeof useOnValueChange;
  useWatch: typeof useWatch;
  useValidation: typeof useValidation;
  useConfig: typeof useConfig;
  Validation: typeof ValidationRender;
  Update: typeof UpdateRender;
}

const Form: FormType = (props) => {

  const { initialValues, control: _control, ...restProps } = props;

  const control = useControl(_control) as InternalControl;
  control.getStore(STORE_INTERNAL_TOKEN).type = FormStoreType.Group;

  return (
    <FormControl
      {...restProps}
      control={control}
      initialValue={initialValues}
      root
    />
  );
};

Form.Item = FormItem;
Form.Group = FormGroup;
Form.List = FormList;
Form.ConfigProvider = ConfigProvider;
Form.useControl = useControl;
Form.useOnValueChange = useOnValueChange;
Form.useWatch = useWatch;
Form.useControlInstance = useControlInstance;
Form.useValidation = useValidation;
Form.useConfig = useConfig;
Form.Validation = ValidationRender;
Form.Update = UpdateRender;

export {
  ConfigProvider,
  useControl,
  useOnValueChange,
  useWatch,
  useControlInstance,
  useValidation,
  useConfig,
  ValidationRender,
  UpdateRender,
};

export default Form;
