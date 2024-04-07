import React from 'react';
import type { FormControl } from '../hooks';
import { INTERNAL_TOKEN, useNamePaths } from '../hooks';
import type { NamePath } from '../utils';
import { Driver, DriverType, TriggerType } from '../utils';

export const FormDriverContext = React.createContext<Driver | undefined>(
  undefined,
);

export interface CreateDriverOptions {
  type: DriverType;
  name?: NamePath;
  initialValue?: any;
  root?: boolean;
  control?: FormControl;
}

export const useCreateDriver = (options: CreateDriverOptions) => {
  const { name, initialValue, type, root = false, control } = options;

  const names = useNamePaths(name);

  const initialValueRef = React.useRef(initialValue);
  initialValueRef.current = initialValue;

  const driver = React.useMemo(() => {
    if (names) {
      return new Driver(type, names, initialValueRef.current);
    }
  }, [type, names]);

  const parentDriver = React.useContext(FormDriverContext);

  React.useEffect(() => {
    if (
      !root &&
      driver &&
      parentDriver &&
      parentDriver.getType() !== DriverType.Field
    ) {
      return parentDriver.registerChild(driver);
    }
  }, [parentDriver, driver, root]);

  React.useEffect(() => {
    return () => {
      driver?.triggerValueChange(undefined, TriggerType.Remove);
      driver?.destroy();
    };
  }, [driver]);

  React.useEffect(() => {
    control?.internalHooks(INTERNAL_TOKEN)?.setDriver(driver);
    return () => {
      control?.internalHooks(INTERNAL_TOKEN)?.removeDriver();
    };
  }, [control, driver]);

  return driver;
};
