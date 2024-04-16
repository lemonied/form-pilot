import React from 'react';
import type { Control } from '../hooks';
import { INTERNAL_TOKEN, useNamePaths } from '../hooks';
import type { NamePath, DriverType } from '../utils';
import { Driver } from '../utils';

export const FormDriverContext = React.createContext<Driver | undefined>(undefined);

export interface DriverOptions {
  type: DriverType;
  name?: NamePath;
  initialValue?: any;
  root?: boolean;
  control?: Control;
}
export const useDriver = (options: DriverOptions) => {
  const { name, initialValue, type, root = false, control } = options;

  const names = useNamePaths(name);

  const parentDriver = React.useContext(FormDriverContext);

  const driverRef = React.useRef<Driver>();

  if (!driverRef.current) {
    driverRef.current = new Driver(type, names);
  }

  control?.internalHooks(INTERNAL_TOKEN)?.setDriver(driverRef.current);

  driverRef.current.setInitialValue(initialValue);

  React.useEffect(() => {
    driverRef.current!.setName(names);
  }, [names]);

  React.useEffect(() => {
    return () => {
      control?.internalHooks(INTERNAL_TOKEN)?.removeDriver();
    };
  }, [control]);

  React.useEffect(() => {
    if (!root) {
      return parentDriver?.registerChild(driverRef.current!);
    }
  }, [parentDriver, root]);

  return driverRef.current;
};
