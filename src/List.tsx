import React from 'react';
import FormControl, { useControl } from './hooks/Control';
import type { SharedControlProps } from './hooks/Control';
import { STORE_INTERNAL_TOKEN } from './hooks/store';
import type { InternalControl } from './hooks/store';
import { exchange } from './utils/valueUtil';
import type { Control } from './utils/interface';
import { useControlInstance } from './hooks/useContext';

export interface FormListFieldData {
  name: number;
  key: number;
}

const correctFieldsName = (fields: FormListFieldData[]) => {
  return fields.map((field, index) => {
    return {
      ...field,
      name: index,
    };
  });
};

export interface FormListProps extends Omit<SharedControlProps, 'children'> {
  children: (fields: FormListFieldData[], control: Control) => React.ReactNode;
}

const FormListContent = (props: Pick<FormListProps, 'children'>) => {
  const { children } = props;

  const control = useControlInstance() as InternalControl;
  const store = control.getStore(STORE_INTERNAL_TOKEN);

  const keyRef = React.useRef(-1);
  const [fields, setFields] = React.useState(() => {
    const list: any[] = control.getValue() || [];
    return list.map((_, index) => ({ name: index, key: ++keyRef.current }));
  });

  React.useEffect(() => {
    return store.listChange.add((data) => {
      const value: any[] = [...(store.value || [])];
      store.touched = true;
      switch (data.type) {

        case 'add': {
          const insertIndex = typeof data.insertIndex === 'number' ? data.insertIndex : value.length;
          setFields(pre => {
            const ret = [...pre];
            ret.splice(insertIndex, 0, { name: ret.length, key: ++keyRef.current });
            return correctFieldsName(ret);
          });
          value.splice(insertIndex, 0, data.value);
          store.setData({ value, preventCapturing: true });
          break;
        }

        case 'remove': {
          setFields(pre => {
            const ret = [...pre];
            ret.splice(data.index, 1);
            return correctFieldsName(ret);
          });
          value.splice(data.index, 1);
          store.setData({ value, preventCapturing: true });
          break;
        }

        case 'move': {
          setFields(pre => {
            return correctFieldsName(
              exchange([...pre], data.from, data.to),
            );
          });
          exchange(value, data.from, data.to);
          store.setData({ value, preventCapturing: true });
          break;
        }
      }
      /**
       * trigger validate
       */
      store.validateOptionalThrow();
    });
  }, [store]);

  React.useEffect(() => {
    return store.valueChange.add((data) => {
      const { newValue, oldValue } = data;
      const newLength = newValue?.length || 0;
      const oldLength = oldValue?.length || 0;
      if (newLength !== oldLength) {
        setFields(pre => {
          let ret = pre;
          if (ret.length > newLength) {
            ret = ret.slice(0, newLength);
          } else if (ret.length < newLength) {
            ret = [...ret];
            for (let i = ret.length; i < newLength; i += 1) {
              ret.push({ name: i, key: ++keyRef.current });
            }
          }
          return correctFieldsName(ret);
        });
      }
    });
  }, [store]);

  return children(fields, control);
};

const FormList = (props: FormListProps) => {

  const { control: _control, children, ...restProps } = props;

  const control = useControl(_control) as InternalControl;
  control.getStore(STORE_INTERNAL_TOKEN).type = 'list';

  return (
    <FormControl
      {...restProps}
      control={control}
      root={false}
    >
      <FormListContent>{children}</FormListContent>
    </FormControl>
  );
};

export default FormList;
