import type { FormStore } from './store';
import { Subscriber } from './subscriber';

export const INTERNAL_CONTROL_TOKEN = '_CONTROL_INTERNAL_HOOKS_TOKEN__';

export class Controller {

  private stores: FormStore[] = [];

  private get store(): FormStore | undefined {
    return this.stores[this.stores.length - 1];
  }

  public valueChange = new Subscriber();
  
  constructor(store?: FormStore) {
    this.setStore(store);
  }

  private valueListener = (...args: Parameters<typeof this.valueChange.trigger>) => {
    this.valueChange.trigger(...args);
  };

  public getControl = () => {
    const ret = {
      getValue: this.getValue,
      getInternalHooks: this.getInternalHooks,
      setValue: this.setValue,
      valueChange: this.valueChange,
    };
    return ret as Omit<typeof ret, 'getInternalHooks'>;
  };

  public getInternalHooks = (token: string) => {
    if (token === INTERNAL_CONTROL_TOKEN) {
      return {
        getStore: () => this.store,
        setStore: this.setStore,
      };
    }
    // eslint-disable-next-line no-console
    throw new Error('For internal use only');
  };

  public getValue = () => {
    return this.store?.getValue();
  };

  public setValue = (value: any) => {
    return this.store?.patchValue(value);
  };

  public reloadStore = (setFn: () => any) => {
    const oldValue = this.getValue();
    this.store?.valueChange.remove(this.valueListener);
    setFn();
    this.store?.valueChange.add(this.valueListener);
    const newValue = this.getValue();
    if (oldValue !== newValue) {
      this.valueChange.trigger(newValue, oldValue);
    }
  };

  public setStore = (store?: FormStore) => {

    this.reloadStore(() => {
      if (store) {
        this.stores.push(store);
      }
    });

    return () => {
      if (store) {
        this.removeStore(store);
      }
    };
  };

  public removeStore = (store: FormStore) => {
    const index = this.stores.indexOf(store);
    if (index > -1) {
      this.reloadStore(() => {
        this.stores.splice(index, 1);
      });
    }
  };

}

export type Control = ReturnType<Controller['getControl']>;

export type InternalControl = Control & Pick<Controller, 'getInternalHooks'>;
