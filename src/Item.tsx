import React from 'react';
import FormControl, { useControl } from './hooks/Control';
import type { SharedControlProps } from './hooks/Control';
import { STORE_INTERNAL_TOKEN } from './utils/constants';
import type { InternalControl } from './hooks/store';
import { useWatch } from './hooks/useValue';
import { defaultGetValueFromEvent } from './utils/valueUtil';
import type { Rule } from './utils/interface';
import { useControlInstance, useControlContext } from './hooks/useContext';
import { executeRules } from './rules/core';

interface InputRenderProps {
  element: React.ReactElement<any>;
  restProps: Record<string, any>;
}
const InputRender = (props: InputRenderProps) => {
  const { element, restProps } = props;
  const value = useWatch();
  return React.cloneElement(element, {
    ...restProps,
    value,
  });
};

interface FormItemContentProps {
  valuePropName?: string;
  children?: React.ReactNode;
  rules?: Rule[];
}
const FormItemContent = (props: FormItemContentProps) => {
  const {
    children,
    valuePropName = 'value',
    rules = [],
  } = props;

  const control = useControlInstance() as InternalControl;
  const { validateTrigger = 'onChange', validateMode } = useControlContext();

  const store = control.getStore(STORE_INTERNAL_TOKEN);

  return React.Children.map(children, (child, index) => {
    if (index === 0 && React.isValidElement<any>(child)) {
      const firstChild = child as React.ReactElement<any>;
      const mergedRules = rules.map(rule => {
        const mergedTrigger = rule.validateTrigger || validateTrigger;
        return {
          ...rule,
          validateTrigger: Array.isArray(mergedTrigger) ? mergedTrigger : [mergedTrigger],
        };
      });
      const triggers = Array.from(
        new Set([
          validateTrigger,
          ...mergedRules.map(rule => rule.validateTrigger),
        ].flat(1)),
      );
      const mergedProps = triggers.reduce<Record<string, any>>((pre, trigger) => {
        pre[trigger] = (...args: any[]) => {
          store.validateByEvent(async () => {
            return await executeRules(control, validateMode, mergedRules.filter(rule => rule.validateTrigger.includes(trigger)));
          });
          return firstChild.props[trigger]?.(...args);
        };
        return pre;
      }, {
        onChange: firstChild.props.onChange,
      });
      return (
        <InputRender
          element={firstChild}
          key="inputRender"
          restProps={{
            ...mergedProps,
            onChange(...args: any[]) {
              store.touched = true;
              store.setData({
                value: defaultGetValueFromEvent(valuePropName, args[0]),
              });
              return mergedProps.onChange?.(...args);
            },
          }}
        />
      );
    }
    return child;
  });

};

export interface FormItemProps extends Omit<SharedControlProps, 'rules'>, FormItemContentProps {
  // extra props
}
const FormItem = (props: FormItemProps) => {

  const {
    control: _control,
    children,
    valuePropName,
    rules,
    ...restProps
  } = props;
  const [key, setKey] = React.useState(0);

  const control = useControl(_control) as InternalControl;
  const store = control.getStore(STORE_INTERNAL_TOKEN);
  store.type = 'item';

  React.useEffect(() => {
    return store.resetChange.add(() => {
      setKey(pre => pre + 1);
    });
  }, [store]);

  return (
    <FormControl
      {...restProps}
      rules={rules}
      control={control}
      root={false}
    >
      <FormItemContent
        key={key}
        valuePropName={valuePropName}
        rules={rules}
      >{children}</FormItemContent>
    </FormControl>
  );
};

export default FormItem;
