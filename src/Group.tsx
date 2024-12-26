import React from 'react';
import type { InternalControl } from './hooks/store';
import { STORE_INTERNAL_TOKEN } from './utils/constants';
import type { SharedControlProps } from './hooks/Control';
import FormControl, { useControl } from './hooks/Control';

export interface FormGroupProps extends SharedControlProps {
  // extra props
}
const FormGroup = (props: FormGroupProps) => {

  const { control: _control, ...restProps } = props;

  const control = useControl(_control) as InternalControl;
  control.getStore(STORE_INTERNAL_TOKEN).type = 'group';

  return (
    <FormControl
      {...restProps}
      control={control}
      root={false}
    />
  );
};

export default FormGroup;
