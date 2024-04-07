import type { NamePaths } from './model';
import { get, set } from './valueUtil';

export enum ChangeType {
  Value,
  Meta,
}

export enum DriverType {
  Field,
  Group,
  List,
}

export enum TriggerType {
  Event,
  Manual,
  Remove,
}

export interface ValueChangeEvent<Value = any> {
  type: ChangeType.Value;
  source: TriggerType;
  previous: Value | undefined;
  current: Value | undefined;
}

export interface MetaChangeEvent {
  type: ChangeType.Meta;
}

export type ChangeEvent = ValueChangeEvent | MetaChangeEvent;

interface Listener {
  (evt: ChangeEvent): any;
}

export class Driver<Value = any> {
  private type: DriverType = DriverType.Field;

  private children?: Driver[] = undefined;

  private name: NamePaths = [];

  private value?: Value = undefined;

  private listeners: Listener[] = [];

  private init = () => {
    this.watch((evt) => {
      if (evt.type === ChangeType.Value) {
        this.children?.forEach((child) => {
          const next = get(evt.current, child.getName());
          child.triggerValueChange(next, TriggerType.Manual);
        });
      }
    });
  };

  constructor(type: DriverType, name: NamePaths, initialValue?: Value) {
    this.type = type;
    this.name = name;
    this.value = initialValue;
    if (type === DriverType.Group || type === DriverType.List) {
      this.children = [];
    }

    this.init();
  }

  public getName = () => this.name;

  public getValue = () => this.value;

  public getType = () => this.type;

  public triggerValueChange = (
    value: Value | undefined,
    source: TriggerType,
  ) => {
    const previous = this.getValue();
    if (previous !== value) {
      this.value = value;
      this.listeners.forEach((listener) =>
        listener({
          type: ChangeType.Value,
          source,
          previous,
          current: this.value,
        }),
      );
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
    if (!this.children) {
      return;
    }
    this.children.push(child);
    child.triggerValueChange(
      get(this.getValue(), child.getName()),
      TriggerType.Manual,
    );
    const stopWatch = child.watch((evt) => {
      if (evt.type === ChangeType.Value) {
        const previous = (this.getValue() ??
          (this.getType() === DriverType.List ? [] : {})) as any;
        const current = set(previous, child.getName(), {
          type: evt.source === TriggerType.Remove ? 'delete' : 'assign',
          value: evt.current,
        });
        this.triggerValueChange(current, evt.source);
        if (evt.source === TriggerType.Remove) {
          this.removeChild(child);
        }
      }
    });
    return () => {
      stopWatch();
      this.removeChild(child);
    };
  };

  public destroy = () => {
    this.listeners = [];
    if (this.children) {
      this.children = [];
    }
  };
}
