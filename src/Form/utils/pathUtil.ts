import React from 'react';
import type { NamePath, NamePaths } from './model';

const toNamePaths = (name?: NamePath) => {
  if (typeof name === 'undefined') {
    return undefined;
  }
  if (Array.isArray(name)) {
    // no empty array
    return name.length ? name : undefined;
  }
  return [name];
};

export const useNamePaths = (name?: NamePath) => {

  const namePaths = toNamePaths(name);
  const ref = React.useRef(namePaths);

  if (
    typeof namePaths === 'undefined' ||
    typeof ref.current === 'undefined' ||
    namePaths.length !== ref.current.length ||
    namePaths.some((v, k) => v !== ref.current![k])
  ) {
    ref.current = namePaths;
  }

  return ref.current;
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
