import React from 'react';
import type { Control, Validation } from './utils/interface';
import { useValidation } from './hooks/useValidation';
import { useOnValueChange } from './hooks/useValue';
import { useMergedInstance } from './hooks/useContext';

interface ValidationRenderProps {
  control?: Control;
  children: (validation?: Validation, control?: Control) => React.ReactNode;
}
export const ValidationRender = (props: ValidationRenderProps) => {

  const { control, children } = props;

  const mergedControl = useMergedInstance(control);

  const validation = useValidation(mergedControl);

  return children(validation, mergedControl);
};

interface UpdateRenderProps {
  children: (control?: Control) => React.ReactNode;
  condition?: (newValue: any, oldValue: any) => boolean;
  control?: Control;
}
export const UpdateRender = (props: UpdateRenderProps) => {
  const { children, condition, control } = props;
  const mergedControl = useMergedInstance(control);
  const [, forceUpdate] = React.useState({});

  useOnValueChange(({ oldValue, newValue }) => {
    if (
      (typeof condition === 'function' && condition(newValue, oldValue)) ||
      typeof condition === 'undefined'
    ) {
      forceUpdate({});
    }
  }, mergedControl);

  return children(mergedControl);
};
