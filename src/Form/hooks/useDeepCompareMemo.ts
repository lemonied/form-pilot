import { isEqual } from 'lodash';
import { useRef } from 'react';
import { usePrevious } from './usePrevious';

export const useDeepCompareMemo = <T>(cb: () => T, deps?: any[]) => {
  const ref = useRef<T>();
  const previous = usePrevious(deps);
  if (typeof deps === 'undefined' || !isEqual(previous, deps)) {
    ref.current = cb();
    return ref.current;
  }
  return ref.current!;
};
