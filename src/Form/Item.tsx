import React from 'react';
import type { NamePath } from './utils/model';
import { FormFieldProvider } from './Context';
import { defaultGetValueFromEvent } from './utils/valueUtil';
import { useSyncValue } from './useValue';
import { useControl } from './useControl';
import type { Control } from './control';

const FormItemContent = (props: React.PropsWithChildren) => {

  const { children } = props;

  const control = useControl();
  const value = useSyncValue(control);

  const _children = React.useMemo(() => {
    const list = React.Children.toArray(children);
    const firstChild = list[0];
    if (React.isValidElement(firstChild)) {
      list[0] = React.cloneElement<any>(firstChild, {
        value,
        onChange(...args: any[]) {
          control.setValue(
            defaultGetValueFromEvent('value', args[0]),
          );
          return firstChild.props.onChange?.(...args);
        },
      });
    }
    return list;
  }, [children, value, control]);

  return _children;
};

export interface FormItemProps {
  name?: NamePath;
  children?: React.ReactNode;
  control?: Control;
}
export const FormItem = (props: FormItemProps) => {

  const { name, children, control } = props;

  return (
    <FormFieldProvider
      name={name}
      control={control}
    >
      <FormItemContent>{children}</FormItemContent>
    </FormFieldProvider>
  );
};
