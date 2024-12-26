import React from 'react';
import type { Rules } from '../rules';

interface ConfigType {
  validateMessages?: Partial<Record<keyof typeof Rules, string>>;
}
const Context = React.createContext<ConfigType | null>(null);

export const useConfig = () => {
  return React.useContext(Context) || {};
};

export const ConfigProvider = (props: React.PropsWithChildren<ConfigType>) => {
  const { children, ...restProps } = props;

  const previous = useConfig();

  const next = React.useMemo<ConfigType>(() => {
    return {
      ...previous,
      ...restProps,
      validateMessages: {
        ...previous.validateMessages,
        ...restProps.validateMessages,
      },
    };
  }, [previous, restProps]);

  return (
    <Context.Provider value={next}>{children}</Context.Provider>
  );
};
