import React from 'react';
import type { Listener } from './subscriber';
import { INTERNAL_TOKEN } from './control';
import type { InternalControl } from './control';
import type { useControl } from './useControl';

export const useOnValueChange = (fn: Listener, control: ReturnType<typeof useControl>) => {
  const fnRef = React.useRef(fn);
  fnRef.current = fn;
  React.useEffect(() => {
    return (control as InternalControl).getInternalHooks(INTERNAL_TOKEN)?.store?.valueChange.add((...args) => fnRef.current(...args));
  }, [control]);
};
