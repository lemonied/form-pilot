import { Subscriber } from './subscriber';
import type { NamePaths } from './utils/model';
import { set, get, isNil, isPlainObject } from './utils/valueUtil';

export enum FormStoreType {
  Group = 'group',
  List = 'list',
  Field = 'field',
};

interface FormStoreInitOptions {
  names?: NamePaths;
  parent?: FormStore;
  type: FormStoreType;
}

export class FormStore {

  private stores: FormStore[] = [];

  private parent?: FormStore = undefined;

  private names?: NamePaths;

  private type?: FormStoreType;

  private value: any = undefined;

  private lock = false;

  public valueChange = new Subscriber();

  constructor(options: FormStoreInitOptions) {
    const { names, parent, type } = options;
    this.stores = parent?.getStores() || [];
    this.names = names;
    this.parent = parent;
    this.type = type;
    if (names) {
      this.value = this.formatValue(
        get(parent?.getValue(), names),
      );
    }
  }

  public get isCollection() {
    return this.type === FormStoreType.Group || this.type === FormStoreType.List;
  }

  public isChildOf(store: FormStore): boolean {
    if (this.parent) {
      if (this.parent === store) {
        return true;
      }
      return this.parent.isChildOf(store);
    }
    return false;
  }

  public getChildren() {
    return this.stores.filter(v => v.parent === this && v.getNames());
  }

  public getAllChildren() {
    return this.stores.filter(v => v.isChildOf(this));
  }

  public getValue() {
    return this.value;
  }

  public formatValue(value: any) {
    if (isNil(value)) {
      return value;
    }
    if (this.type === FormStoreType.List && !Array.isArray(value)) {
      return undefined;
    } else if (this.type === FormStoreType.Group && !isPlainObject(value)) {
      return Object.assign({}, value);
    }
    return value;
  }

  public patchValue(_value: any) {
    const value = this.formatValue(_value);
    if (this.lock || this.value === value) {
      return;
    }
    this.lock = true;
    const oldValue = this.value;
    this.value = value;
    this.valueChange.trigger(this.value, oldValue);
    if (this.isCollection) {
      const children = this.getChildren();
      children.forEach(child => {
        child.patchValue(get(this.value, child.getNames()));
      });
    }
    if (this.parent && this.names) {
      this.parent.patchValue(set(this.parent.getValue(), this.names, this.value));
    }
    this.lock = false;
  }

  public getStores() {
    return this.stores;
  }

  public getFullNames(): NamePaths {
    const names = this.names || [];
    if (this.parent) {
      return [...this.parent.getFullNames(), ...(this.names || [])];
    }
    return names;
  }

  public getNames() {
    return this.names;
  }

  public setNames(names?: NamePaths) {
    if (names !== this.names) {
      this.names = names;
    }
  }

  public getType() {
    return this.type;
  }

}
