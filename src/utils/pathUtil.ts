import React from 'react';
import type { NamePath, NamePaths, NonNullableNamePaths } from './interface';

export const toNamePaths = (name?: NamePath): NonNullableNamePaths | undefined => {
  if (typeof name === 'undefined') {
    return undefined;
  }
  if (Array.isArray(name)) {
    // no empty array
    return name.length ? name as NonNullableNamePaths : undefined;
  }
  return [name];
};

export const matchPaths = (paths?: NamePaths, subPaths?: NamePaths, exact = false) => {
  if (!paths || !subPaths) {
    return false;
  }
  if (exact && paths.length !== subPaths.length) {
    return false;
  }
  return paths.every((v, k) => v === subPaths[k]);
};

export const useNamePaths = (name?: NamePath) => {

  const namePaths = toNamePaths(name);
  const ref = React.useRef(namePaths);

  if (
    typeof namePaths === 'undefined' ||
    typeof ref.current === 'undefined' ||
    !matchPaths(namePaths, ref.current, true)
  ) {
    ref.current = namePaths;
  }

  return ref.current;
};
