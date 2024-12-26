import React from 'react';
import type { Listener } from '../utils/subscriber';
import { isInternalControl } from './store';
import type { InternalControl, ValueChangeParameter } from './store';
import type { Control, NamePath } from '../utils/interface';
import { useMergedInstance } from './useContext';
import { get } from '../utils/valueUtil';
import { useNamePaths } from '../utils/pathUtil';
import { STORE_INTERNAL_TOKEN } from '../utils/constants';

export const useOnValueChange = <T = any>(fn: Listener<ValueChangeParameter<T>>, control?: Control) => {
  const mergedControl = useMergedInstance(control) as InternalControl;
  const fnRef = React.useRef(fn);
  fnRef.current = React.useMemo(() => fn, [fn]);
  React.useEffect(() => {
    return mergedControl?.getStore(STORE_INTERNAL_TOKEN).valueChange.add((arg) => fnRef.current(arg));
  }, [mergedControl]);
};

export function useWatch<T = any>(name: NamePath, control?: Control): T;
export function useWatch<T = any, R = any>(selector: (values: T) => R, control?: Control): T;
export function useWatch<T = any>(control?: Control): T;

export function useWatch(arg1?: NamePath | Control | ((values: any) => any), arg2?: Control) {
  
  let control: Control | undefined = undefined;
  let name: NamePath | undefined = undefined;
  let selector = React.useRef<(values: any) => any>(undefined);

  if (arg2) {
    control = arg2;
  }
  if (isInternalControl(arg1)) {
    control = arg1;
  } else if (typeof arg1 === 'function') {
    selector.current = arg1;
  } else {
    name = arg1 as NamePath;
  }

  const mergedControl = useMergedInstance(control) as InternalControl;
  const names = useNamePaths(name);

  const getValue = React.useCallback(() => {
    if (selector.current) {
      return selector.current(mergedControl.getValue());
    }
    if (names) {
      return get(mergedControl.getValue(), names)[0];
    }
    return mergedControl.getValue();
  }, [names, mergedControl]);

  const [state, setState] = React.useState(() => getValue());

  React.useEffect(() => {
    setState(getValue());
  }, [mergedControl, getValue]);

  useOnValueChange(() => {
    const newState = getValue();
    if (!Object.is(state, newState)) {
      setState(newState);
    }
  }, mergedControl);

  return state;
};
