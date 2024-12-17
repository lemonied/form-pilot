import type { NamePaths } from './interface';

export function isNil(data: any) {
  return typeof data === 'undefined' || data === null;
}

function baseCreate<T>(data: T) {
  if (data && typeof data === 'object') {
    if (Array.isArray(data)) {
      return [] as T;
    }
    return {};
  }
}

export function get(data: any, name: NamePaths = []) {
  let obj = data;
  let exist = true;
  for (const key of name) {
    exist = !isNil(obj) && Object.prototype.hasOwnProperty.call(obj, key);
    obj = obj?.[key];
    if (!exist) {
      break;
    }
  }
  return [obj, exist] as const;
}

function lightClone<T>(data: T) {
  return (Array.isArray(data) ? [...data] : Object.assign({}, data)) as T;
}

function getDefaultValueByKey(key: string | number) {
  if (typeof key === 'number') {
    return [];
  }
  return {};
}

export function set<T>(data: T, names: NamePaths, value: any) {
  let ret: any = lightClone(data ?? getDefaultValueByKey(names[0]));
  let current = ret;
  for (let i = 0; i < names.length; i += 1) {
    const key = names[i];
    if (i === names.length - 1) {
      current[key] = value;
      return ret as T;
    }
    current[key] = lightClone(current[key] ?? getDefaultValueByKey(names[i + 1]));
    current = current[key];
  }
  return ret as T;
}

export function basePick(data: any, namePath: NamePaths, initialValue?: any) {
  let ret = initialValue;
  let current = initialValue;

  for (let i = 0; i < namePath.length; i += 1) {
    if (i === 0 && !ret) {
      ret = baseCreate(data);
      current = ret;
    }
    if (!current) {
      break;
    }
    const name = namePath[i];
    const [value, valueExist] = get(data, namePath.slice(0, i + 1));
    if (i === namePath.length - 1) {
      if (valueExist) {
        current[name] = value;
      }
      break;
    }
    const [initVal, initValExist] = get(initialValue, namePath.slice(0, i + 1));
    if (initValExist) {
      current[name] = initVal;
    } else if (valueExist) {
      current[name] = baseCreate(value);
    }
    current = current[name];
  }

  return ret;
}

export function exchange<T extends any[]>(array: T, from: number, to: number) {
  if (from > array.length - 1 || to > array.length - 1) {
    throw new Error('Out of range');
  }
  const f = array[from];
  const t = array[to];
  array[to] = f;
  array[from] = t;
  return array;
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
