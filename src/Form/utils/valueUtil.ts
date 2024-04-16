import type { NamePaths } from './model';

export function getValueFromEvent(valuePropName: string, event: any) {
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

export function get(data: any, name: NamePaths = []) {
  let obj = data;
  for (const key of name) {
    obj = obj?.[key];
  }
  return obj;
}

export function isNil(data: any) {
  return data === undefined || data === null;
}

export function has(data: any, name: NamePaths) {
  let current = data;

  for (const key of name) {
    if (isNil(current) || !Object.prototype.hasOwnProperty.call(current, key)) {
      return false;
    }
    current = current[key];
  }

  return true;
}

export function clone<T extends object>(data: T) {
  return (Array.isArray(data) ? [...data] : Object.assign({}, data)) as T;
}

export function set<T extends Record<string, any> | any[]>(data: T, name: NamePaths, value: any, immutable = true) {

  const ret: any = immutable ? clone(data) : data;

  let current = ret;
  for (let i = 0; i < name.length; i += 1) {
    const key = name[i];
    if (i === name.length - 1) {
      current[key] = value;
      return ret as T;
    }
    if (immutable) {
      current[key] = clone(current[key]);
    }
    current = current[key];
  }

  return ret as T;
}

export function del<T extends Record<string, any> | any[]>(data: T, name: NamePaths, immutable = false) {

  const ret: any = immutable ? clone(data) : data;

  if (!has(data, name)) {
    return data;
  }

  let current = ret;
  for (let i = 0; i < name.length; i += 1) {
    const key = name[i];
    if (i === name.length - 1) {
      if (Array.isArray(current)) {
        current.splice(Number(key), 1);
      } else {
        delete current[key];
      }
      return ret as T;
    }
    if (immutable) {
      current[key] = clone(current[key]);
    }
    current = current[key];
  }

  return ret as T;
}
