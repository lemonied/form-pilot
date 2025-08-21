import React from 'react';
import type { Control } from '../utils/interface';
import { FormControlContext } from './Control';
import type { FormControlContextType } from './Control';

export const useControlContext = (): Partial<FormControlContextType> => {
  return React.useContext(FormControlContext) || {};
};

export const useControlInstance = (root?: boolean): Control | undefined => {
  const { collection, control } = useControlContext();

  if (root && collection) {
    return collection[0];
  }

  return control;

};

export const useMergedInstance = (control?: Control) => {
  const _control = useControlInstance();
  return control || _control;
};
