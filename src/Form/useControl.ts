import React from 'react';
import type { Control } from './control';
import { Controller } from './control';
import { useFormStore } from './Context';

export const useControl = () => {

  const store = useFormStore();

  const controlRef = React.useRef<Control>();
  if (!controlRef.current) {
    const instance = new Controller(store);
    controlRef.current = instance.getControl();
  }

  return controlRef.current!;
};
