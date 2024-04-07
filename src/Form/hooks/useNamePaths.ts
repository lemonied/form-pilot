import type { NamePath } from '../utils';
import { useDeepCompareMemo } from './useDeepCompareMemo';

export const useNamePaths = (name?: NamePath) => {
  return useDeepCompareMemo(() => {
    if (typeof name === 'undefined') {
      return undefined;
    }
    if (Array.isArray(name)) {
      // no empty array
      return name.length ? name : undefined;
    }
    return [name];
  }, [name]);
};
