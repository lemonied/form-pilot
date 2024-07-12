import React from 'react';
import type { Listener } from './utils/subscriber';
import type { InternalControl, Control } from './control';

export const useOnValueChange = <T = any>(fn: Listener<T>, control: Control) => {
  const fnRef = React.useRef(fn);
  fnRef.current = fn;
  React.useEffect(() => {
    const internalControl = control as InternalControl;
    return internalControl.valueChange.add((...args) => fnRef.current(...args));
  }, [control]);
};

export const useSyncValue = (control: Control) => {
  const [state, setState] = React.useState(control.getValue());
  useOnValueChange((value) => setState(value), control);
  return state;
};
