import type { NamePaths } from './model';
import { get } from './valueUtil';

const EMPTY_VALUE = Symbol('EMPTY_VALUE');

export enum ChangeType {
  Value = 'value',
  Meta = 'meta',
  Reset = 'reset',
}

export enum DriverType {
  Control = 'control',
  Group = 'group',
  List = 'list',
}

export interface ValueChangeEvent {
  type: ChangeType.Value;
}

export interface MetaChangeEvent {
  type: ChangeType.Meta;
}

export interface ResetEvent {
  type: ChangeType.Reset;
}

export type ChangeEvent = ValueChangeEvent | MetaChangeEvent | ResetEvent;

interface Listener {
  (evt: ChangeEvent): any;
}

export class Driver<Value = any> {

  private type: DriverType = DriverType.Control;

  private parent?: Driver = undefined;

  private children?: Driver[] = undefined;

  private name?: NamePaths;

  private value?: Value | symbol = EMPTY_VALUE;

  private initialValue?: Value = undefined;

  private listeners: Listener[] = [];

  constructor(type: DriverType, name?: NamePaths) {
    this.type = type;
    this.name = name;
    if (type === DriverType.Group || type === DriverType.List) {
      this.children = [];
    }
  }

  public getParent = () => this.parent;

  public getInitialValue = (): Value | undefined => {
    return this.initialValue ?? get(this.getParent()?.getInitialValue(), this.getName());
  };

  public getName = () => this.name;

  public getValue = () => {
    if (this.value === EMPTY_VALUE) {
      return this.getInitialValue();
    }
    return this.value as Exclude<typeof this.value, symbol>;
  };

  public getType = () => this.type;

  public setInitialValue = (value?: Value) => this.initialValue = value;

  public reset = () => {
    this.setValue(this.getInitialValue());
  };

  public setName = (name?: NamePaths) => {
    this.name = name;
  };

  public triggerValueChange() {
    this.listeners.forEach((listener) => listener({
      type: ChangeType.Value,
    }));
    this.parent?.triggerValueChange();
  }

  public setValue = (value?: Value) => {
    const type = this.getType();
    if (type === DriverType.Control) {
      const previous = this.getValue();
      if (previous === value) {
        return;
      }
      this.value = value;
      this.triggerValueChange();
    } else {
      this.children?.forEach(child => {
        const name = child.getName();
        if (name) {
          child.setValue(get(value, name));
        }
      });
    }
  };

  public stopWatch = (fn: Listener) => {
    const index = this.listeners.indexOf(fn);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  };

  public watch = (fn: Listener) => {
    this.listeners.push(fn);
    return () => {
      this.stopWatch(fn);
    };
  };

  public removeChild = (child: Driver) => {
    const index = this.children?.indexOf(child) ?? -1;
    if (index > -1) {
      this.children?.splice(index, 1);
    }
  };

  public registerChild = (child: Driver) => {
    if (!this.children || this.children.includes(child)) {
      return;
    }
    this.children.push(child);
    child.parent = this;
    if (child.getType() === DriverType.Control) {
      child.triggerValueChange();
    }
    return () => {
      this.removeChild(child);
      child.parent = undefined;
    };
  };

}
