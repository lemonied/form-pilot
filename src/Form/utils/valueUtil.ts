import type { NamePaths } from './model';

export function isNil(data: any) {
  return typeof data === 'undefined' || data === null;
}

export function get(data: any, name: NamePaths = []) {
  let obj = data;
  for (const key of name) {
    obj = obj?.[key];
  }
  return obj;
}

export function clone<T extends object>(data: T) {
  return (Array.isArray(data) ? [...data] : Object.assign({}, data)) as T;
}

export function set<T extends Record<string, any> | any[]>(data: T, name: NamePaths, value: any) {

  const ret: any = clone(data);

  let current = ret;
  for (let i = 0; i < name.length; i += 1) {
    const key = name[i];
    if (i === name.length - 1) {
      current[key] = value;
      return ret as T;
    }
    current[key] = clone(current[key]);
    current = current[key];
  }

  return ret as T;
}

export function isPlainObject(obj: any) {
  if (typeof obj !== 'object' || obj === null) return false;

  const proto = Object.getPrototypeOf(obj);
  return proto === Object.prototype || proto === null;
}

export function defaultGetValueFromEvent(valuePropName: string, event: any) {
  if (
    event &&
    event.target &&
    typeof event.target === 'object' &&
    valuePropName in event.target
  ) {
    return event.target[valuePropName];
  }
  return event;
}
