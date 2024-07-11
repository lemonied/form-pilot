import React from 'react';
import type { Listener } from './subscriber';
import type { InternalControl } from './control';
import type { useControl } from './useControl';

export const useOnValueChange = (fn: Listener, control: ReturnType<typeof useControl>) => {
  const fnRef = React.useRef(fn);
  fnRef.current = fn;
  React.useEffect(() => {
    const internalControl = control as InternalControl;
    return internalControl.valueChange.add((...args) => fnRef.current(...args));
  }, [control]);
};
