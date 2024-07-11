import React from 'react';
import { FormStore } from './store';
import { FormStoreType } from './store';
import type { NamePath } from './utils/model';
import { useNamePaths } from './utils/pathUtil';
import type { Control, InternalControl } from './control';
import { INTERNAL_CONTROL_TOKEN } from './control';

const FormStoreContext = React.createContext<FormStore | undefined>(undefined);

export const useFormStore = () => React.useContext(FormStoreContext);

interface FormStoreProps {
  children?: React.ReactNode;
  name?: NamePath;
  control?: Control;
}
const FormStoreProviderHOC = (type: FormStoreType, root = false) => {

  const useParent = root ? (() => undefined) : useFormStore;

  const Provider = (props: FormStoreProps) => {

    const { children, name, control } = props;
    const parent = useParent();
    const names = useNamePaths(name);

    const storeRef = React.useRef<FormStore>() as React.MutableRefObject<FormStore>;
    if (!storeRef.current) {
      storeRef.current = new FormStore({
        type,
        parent: parent?.isCollection ? parent : undefined,
        names,
      });
    }

    React.useEffect(() => {
      const hooks = (control as InternalControl)?.getInternalHooks(INTERNAL_CONTROL_TOKEN);
      return hooks?.setStore(storeRef.current);
    }, [control]);

    React.useEffect(() => {
      storeRef.current.setNames(names);
    }, [names]);

    React.useEffect(() => {
      const stores = storeRef.current.getStores();
      stores.push(storeRef.current);
      return () => {
        const index = stores.indexOf(storeRef.current);
        if (index > -1) {
          stores.splice(index, 1);
        }
      };
    }, []);

    return (
      <FormStoreContext.Provider value={storeRef.current}>{children}</FormStoreContext.Provider>
    );
  };
  return Provider;
};

export const FormRootProvider = FormStoreProviderHOC(FormStoreType.Group, true);

export const FormGroupProvider = FormStoreProviderHOC(FormStoreType.Group);

export const FormListProvider = FormStoreProviderHOC(FormStoreType.List);

export const FormFieldProvider = FormStoreProviderHOC(FormStoreType.Field);
