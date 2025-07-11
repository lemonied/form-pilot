import React from 'react';
import { FormStore } from './store';
import type { InternalControl } from './store';
import type { NamePath, NonNullableNamePaths, Control, Rule, ValidateMode, ValidateTrigger } from '../utils/interface';
import { FormStoreType } from '../utils/interface';
import { useNamePaths } from '../utils/pathUtil';
import { STORE_INTERNAL_TOKEN } from '../utils/constants';
import { executeRules } from '../rules/core';
import { useConfig } from './ConfigProvider';

export interface FormControlContextType {
  control?: Control;
  parent?: Control;
  collection: Control[];
  namePathList: NonNullableNamePaths[];
  validateMode?: ValidateMode;
  validateTrigger?: ValidateTrigger;
}

export const FormControlContext = React.createContext<FormControlContextType | undefined>(undefined);

const defaultNamePaths = ['independentControl'] as NonNullableNamePaths;

export const useControl = (control?: Control) => {
  const controlRef = React.useRef<Control>(undefined);
  const parameterRef = React.useRef(control);

  if (parameterRef.current !== control) {
    throw new Error('Parameter "control" cannot be variable.');
  }

  if (!controlRef.current) {
    if (control) {
      controlRef.current = control;
    } else {
      controlRef.current = new FormStore().internalControl;
    }
  }

  return controlRef.current!;
};

export interface SharedControlProps {
  children?: React.ReactNode;
  control?: Control;
  initialValue?: any;
  name?: NamePath;
  rules?: Omit<Rule, 'validateTrigger'>[];
  validateMode?: ValidateMode;
  validateTrigger?: ValidateTrigger;
  ref?: React.Ref<Control | undefined | null>;
}

interface FormControlContentProps extends Omit<SharedControlProps, 'name' | 'control'> {
  namePaths: NonNullableNamePaths;
  control: Control;
}
const FormControlContent = (props: FormControlContentProps) => {
  const {
    children,
    control,
    initialValue,
    namePaths,
    rules,
    ref,
  } = props;

  const uniqueKeyRef = React.useRef({});

  const { parent, validateMode } = React.useContext(FormControlContext) || {};
  const parentStore = (parent as InternalControl)?.getStore(STORE_INTERNAL_TOKEN) as (FormStore | undefined);

  const currentStore = (control as InternalControl).getStore(STORE_INTERNAL_TOKEN);
  currentStore.parent = parentStore;

  currentStore.init({ value: initialValue, namePaths });

  currentStore.setValidator(async (control) => {
    return await executeRules(control, validateMode, rules);
  });

  React.useEffect(() => {
    if (!currentStore.stamp) {
      currentStore.stamp = uniqueKeyRef.current;
    }
    if (currentStore.stamp !== uniqueKeyRef.current) {
      throw new Error('"control" cannot be attached to multiple components at the same time');
    }
    return () => {
      currentStore.stamp = undefined;
    };
  }, [currentStore]);

  React.useEffect(() => {
    
    parentStore?.children.add(currentStore);
    currentStore.parent = parentStore;
    return () => {
      currentStore.parent = undefined;
      parentStore?.children.delete(currentStore);
    };

  }, [currentStore, parentStore]);

  React.useEffect(() => {
    if (namePaths !== currentStore.namePaths) {
      currentStore.setNamePaths(namePaths);
    }
  }, [currentStore, namePaths]);

  React.useImperativeHandle(ref, () => control);

  return children;
};

const FormControlWrapper = (props: FormControlContentProps) => {

  const {
    control,
    namePaths,
    validateTrigger,
    validateMode,
  } = props;

  const context = React.useContext(FormControlContext);

  const nextContext = React.useMemo<FormControlContextType>(() => {
    let {
      collection = [],
      namePathList = [],
      validateMode: _validateMode,
      validateTrigger: _validateTrigger,
    } = context || {};
    const parent = collection[collection.length - 1];
    if ((control as InternalControl).getStore(STORE_INTERNAL_TOKEN).type !== FormStoreType.Item) {
      collection = [...collection, control];
      namePathList = [...namePathList, namePaths];
    }
    return {
      control,
      collection,
      parent,
      namePathList,
      validateTrigger: validateTrigger || _validateTrigger,
      validateMode: validateMode || _validateMode,
    };
  }, [context, control, namePaths, validateMode, validateTrigger]);

  return (
    <FormControlContext.Provider value={nextContext}>
      <FormControlContent {...props} />
    </FormControlContext.Provider>
  );
};

export interface FormControlProps extends SharedControlProps {
  root?: boolean;
}
const FormControl = (props: FormControlProps) => {
  const { name, root, control: _control, ...restProps } = props;
  const { validateMode, validateTrigger } = restProps;
  const namePaths = useNamePaths(name);
  const control = useControl(_control) as InternalControl;

  const config = useConfig();
  control.getStore(STORE_INTERNAL_TOKEN).validateMessages = config.validateMessages;

  const nextContext = React.useMemo<FormControlContextType | undefined>(() => {
    return {
      control,
      collection: [control],
      namePathList: namePaths ? [namePaths] : [],
      validateMode,
      validateTrigger,
    };
  }, [control, namePaths, validateMode, validateTrigger]);

  if (root || !namePaths) {
    return (
      <FormControlContext.Provider value={nextContext}>
        <FormControlContent
          {...restProps}
          control={control}
          namePaths={namePaths ?? defaultNamePaths}
        />
      </FormControlContext.Provider>
    );
  }

  return (
    <FormControlWrapper
      {...restProps}
      control={control}
      namePaths={namePaths}
    />
  );

};

export default FormControl;
