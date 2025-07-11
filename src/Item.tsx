import React from 'react';
import FormControl, { useControl } from './hooks/Control';
import type { SharedControlProps } from './hooks/Control';
import { STORE_INTERNAL_TOKEN } from './utils/constants';
import type { InternalControl } from './hooks/store';
import { useWatch } from './hooks/useValue';
import { defaultGetValueFromEvent } from './utils/valueUtil';
import type { Rule } from './utils/interface';
import { FormStoreType } from './utils/interface';
import { useControlInstance, useControlContext } from './hooks/useContext';
import { executeRules } from './rules/core';

type InputProps = Record<string, unknown>;
interface InputRenderFunction {
  (props: InputProps): React.ReactNode;
}
interface InputRenderProps extends InputProps {
  element: React.ReactElement<any> | InputRenderFunction;
  valuePropName: string;
}
const InputRender = (props: InputRenderProps) => {
  const { element, valuePropName, ...restProps } = props;
  const value = useWatch();
  if (typeof element === 'function') {
    return element({
      ...restProps,
      [valuePropName]: value,
    });
  }
  return React.cloneElement(element, {
    ...restProps,
    [valuePropName]: value,
  });
};

interface FormItemContentProps extends Partial<Pick<InputRenderProps, 'valuePropName'>> {
  getValueFromEvent?: (...args: any[]) => any;
  trigger?: string;
  children?: React.ReactNode | InputRenderFunction;
  rules?: Rule[];
}
const FormItemContent = (props: FormItemContentProps) => {
  const {
    children,
    valuePropName = 'value',
    getValueFromEvent,
    trigger = 'onChange',
    rules = [],
  } = props;

  const control = useControlInstance() as InternalControl;
  const { validateTrigger = 'onChange', validateMode, namePathList } = useControlContext();

  const nameProp = React.useMemo(() => {

    const namePath = control.getName();

    if (namePath) {
      return {
        name: (namePathList || []).concat([namePath]).flat(1).join('.'),
      };
    }
    
  }, [namePathList, control]);

  const store = control.getStore(STORE_INTERNAL_TOKEN);

  const mergedRules = rules.map(rule => {
    const mergedTrigger = rule.validateTrigger || validateTrigger;
    return {
      ...rule,
      validateTrigger: Array.isArray(mergedTrigger) ? mergedTrigger : [mergedTrigger],
    };
  });
  const validateTriggers = Array.from(
    new Set([
      validateTrigger,
      ...mergedRules.map(rule => rule.validateTrigger),
    ].flat(1)),
  );
  const triggerProps = validateTriggers.reduce<Record<string, any>>((pre, key) => {
    const last = pre[key];
    pre[key] = (...args: any[]) => {
      last?.(...args);
      store.validateByEvent(async () => {
        return await executeRules(control, validateMode, mergedRules.filter(rule => rule.validateTrigger.includes(key)));
      });
    };
    return pre;
  }, {
    [trigger]: (...args: any[]) => {
      store.touched = true;
      store.setData({
        value: typeof getValueFromEvent === 'function' ? getValueFromEvent(...args) : defaultGetValueFromEvent(valuePropName, args[0]),
      });
    },
  });

  if (typeof children === 'function') {
    return (
      <InputRender
        {...nameProp}
        {...triggerProps}
        valuePropName={valuePropName}
        element={children}
      />
    );
  }

  return React.Children.map(children, (child, index) => {
    if (index === 0 && React.isValidElement<any>(child)) {
      const firstChild = child as React.ReactElement<any>;
      const mergedProps = Object.keys(triggerProps).reduce<Record<string, any>>((pre, key) => {
        const last = triggerProps[key];
        pre[key] = (...args: any[]) => {
          last?.(...args);
          return firstChild.props[trigger]?.(...args);
        };
        return pre;
      }, {
        ...('name' in firstChild.props ? {
          name: firstChild.props.name,
        } : nameProp),
      });
      return (
        <InputRender
          {...mergedProps}
          valuePropName={valuePropName}
          element={firstChild}
          key="inputRender"
        />
      );
    }
    return child;
  });

};

export interface FormItemProps extends Omit<SharedControlProps, 'rules' | 'children'>, FormItemContentProps {
  // extra props
}
const FormItem = (props: FormItemProps) => {

  const {
    control: _control,
    children,
    valuePropName,
    trigger,
    getValueFromEvent,
    rules,
    ...restProps
  } = props;
  const [key, setKey] = React.useState(0);

  const control = useControl(_control) as InternalControl;
  const store = control.getStore(STORE_INTERNAL_TOKEN);
  store.type = FormStoreType.Item;

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
        trigger={trigger}
        getValueFromEvent={getValueFromEvent}
        rules={rules}
      >{children}</FormItemContent>
    </FormControl>
  );
};

export default FormItem;
