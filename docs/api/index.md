---
title: Documents
---

## 示例

### 一般使用
<code src="../examples/NormalForm.tsx"></code>

### 初始数据
<code src="../examples/InitialValue.tsx"></code>

### 表单校验
<code src="../examples/ComplexForm/ValidationBase.tsx" debug></code>
<code src="../examples/ComplexForm/GetValueFromEvent.tsx" debug></code>
<code src="../examples/ComplexForm/Validation.tsx"></code>

## API

### Form
表单的根元素
| property        | description        | type                                      | default value |
| --------------- | ------------------ | ----------------------------------------- | ------------- |
| children        | `React.ReactNode`  | `React.ReactNode`                         | `null`        |
| control         | Form Control       | `Control`                                 | `void`        |
| rules           | Verification rules | `Omit<Rule, 'validateTrigger'>[]`         | `void`        |
| validateMode    | validate mode      | `ValidateMode`                            | `serial`      |
| validateTrigger | validate trigger   | `ValidateTrigger \| ValidateTrigger[]`    | `onChange`    |
| ref             | React.Ref          | `React.Ref<Control \| undefined \| null>` | `void`        |
| initialValues   | initialValues      | `any`                                     | `void`        |
| name            | form name          | `NamePath`                                | `void`        |

### Form.Group
类似 Form，Form.Group可以有父级control，Form始终为顶层control
| property        | description                                          | type                                      | default value |
| --------------- | ---------------------------------------------------- | ----------------------------------------- | ------------- |
| children        | `React.ReactNode`                                    | `React.ReactNode`                         | `null`        |
| control         | Form Control                                         | `Control`                                 | `void`        |
| rules           | Verification rules                                   | `Omit<Rule, 'validateTrigger'>[]`         | `void`        |
| validateMode    | validate mode                                        | `ValidateMode`                            | `serial`      |
| validateTrigger | validate trigger                                     | `ValidateTrigger \| ValidateTrigger[]`    | `onChange`    |
| ref             | React.Ref                                            | `React.Ref<Control \| undefined \| null>` | `void`        |
| initialValue    | If a parent control exists, it will not take effect. | `any`                                     | `void`        |
| name            | group name                                           | `NamePath`                                | `void`        |

### Form.Item
表单的最小单元，用于控制输入、选择，或者自定义表单控件（需支持属性value和onChange）
| property          | description                                          | type                                                                          | default value |
| ----------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------- | ------------- |
| children          | Input box                                            | `React.ReactElement \| ((props: Record<string, unknown>) => React.ReactNode)` | `null`        |
| control           | Form Control                                         | `Control`                                                                     | `void`        |
| rules             | Verification rules                                   | `Omit<Rule, 'validateTrigger'>[]`                                             | `void`        |
| validateMode      | validate mode                                        | `ValidateMode`                                                                | `serial`      |
| validateTrigger   | validate trigger                                     | `ValidateTrigger \| ValidateTrigger[]`                                        | `onChange`    |
| ref               | React.Ref                                            | `React.Ref<Control \| undefined \| null>`                                     | `void`        |
| initialValue      | If a parent control exists, it will not take effect. | `any`                                                                         | `void`        |
| name              | input name                                           | `NamePath`                                                                    | `void`        |
| valuePropName     | value prop name                                      | `string`                                                                      | `value`       |
| getValueFromEvent | custom get value                                     | `(...args: any[]) => any`                                                     | `void`        |
| trigger           | value trigger event name                             | `string`                                                                      | `onChange`    |

### Form.List
渲染array类型的数据
| property        | description                                          | type                                                                 | default value |
| --------------- | ---------------------------------------------------- | -------------------------------------------------------------------- | ------------- |
| children        | child elements                                       | `(fields: FormListFieldData[], control: Control) => React.ReactNode` | `null`        |
| control         | Form Control                                         | `Control`                                                            | `void`        |
| rules           | Verification rules                                   | `Omit<Rule, 'validateTrigger'>[]`                                    | `void`        |
| validateMode    | validate mode                                        | `ValidateMode`                                                       | `serial`      |
| validateTrigger | validate trigger                                     | `ValidateTrigger \| ValidateTrigger[]`                               | `onChange`    |
| ref             | React.Ref                                            | `React.Ref<Control \| undefined \| null>`                            | `void`        |
| initialValue    | If a parent control exists, it will not take effect. | `any`                                                                | `void`        |
| name            | input name                                           | `NamePath`                                                           | `void`        |

### Form.Update
动态更新，根据条件判断来决定是否更新子元素，多用于动态表单
| property  | description                                                                         | type                                        | default value |
| --------- | ----------------------------------------------------------------------------------- | ------------------------------------------- | ------------- |
| children  | 子元素                                                                              | `(control?: Control) => React.ReactNode`    |
| control   | FormControl（不传时使用当前Context下的FormControl）                                 | `Control`                                   | `void`        |
| condition | 条件判断，返回`true`时重绘子元素,不传表示始终重绘子元素（当表单变化时就重绘子元素） | `(newValue: any, oldValue: any) => boolean` | `void`        |

### Form.Validation
表单校验渲染组件，用于渲染表单元素的校验结果
| property | description                                     | type                                                              | default value |
| -------- | ----------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| children | 子元素                                          | `(validation?: Validation, control?: Control) => React.ReactNode` |
| control  | Control（不传时使用当前`Context`下的`control`） | `Control`                                                         | `void`        |

### Form.useControl
创建一个表单控制器
```ts
type useControl = (control?: Control) => Control
```

### Form.useControlInstance
返回当前`Context`下的`control`，`root`为`true`时返回根节点的`control`
```ts
type useControlInstance = (root?: boolean) => Control | undefined
```

### Form.useOnValueChange
监听某个control的值变化
```ts
type useOnValueChange = <T = any>(fn: ({ newValue: T, oldValue: T }) => void, control?: Control) => void;
```

### Form.useWatch
当control的值变化时，返回需要获取的值
```ts
export function useWatch<T = any>(name: NamePath, control?: Control<T>): T;
export function useWatch<T = any, R = any>(selector: (values: T, ctl: Control<T>) => R, control?: Control<T>): R;
export function useWatch<T = any>(control?: Control<T>): T;
```

### Form.useValidation
返回某个control的校验结果
```ts
type useValidation = (control?: Control) => Validation;
```

## interface

### Name
```ts
export type Name = string | number;

export type NamePaths = Name[];

export type NonNullableNamePaths = [Name, ...NamePaths];

export type NamePath = Name | NamePaths;
```

### ValidateOptions
```ts
export interface ValidateOptions {
  thrownTypes?: ValidateType[];
}
```

### Control
```ts
export interface Control<Value = any> {
  getValue: () => Value;
  getStrictValue: (name?: NamePath[]) => Value;
  getName: () => NonNullableNamePaths | undefined;
  getFullName: () => NonNullableNamePaths | undefined;
  setValue: (value?: Value) => Value;
  setFieldValue: (name: NamePath, value: any) => void;
  isTouched: () => boolean;
  reset: () => void;
  validate: (options?: ValidateOptions) => Promise<Value>;
  validateFields: (name?: NamePath[], options?: ValidateOptions & { recursive: boolean }) => Promise<Value>;
  getValidationErrors: () => ValidationError[] | undefined;
  clearValidation: () => void;
  add: <T = any>(initialValue?: T, insertIndex?: number) => void;
  remove: (index: number) => void;
  move: (from: number, to: number) => void;
  get: (name?: NamePath) => this | undefined;
  getStoreStype(): FormStoreType;
}
```

```ts
export enum FormStoreType {
  Group = 'group',
  List = 'list',
  Item = 'item',
}
```

### ValidateTrigger
```ts
export type ValidateTrigger = 'onChange' | 'onBlur' | 'onFocus';
```

### ValidateType
```ts
/**
 * @default error
 * @description Error Type.
 */
export type ValidateType = 'error' | 'warning';
```

### ValidateMode
```ts
/**
 * @default serial
 */
export type ValidateMode = 'parallel' | 'serial';
```

### Rule
```ts
export interface Rule {
  type?: ValidateType;
  validateTrigger?: ValidateTrigger[] | ValidateTrigger;
  validator: (control: Control) => Promise<any>;
}
```

### ValidationError
```ts
export interface ValidationError {
  type: ValidateType;
  message: string;
  control: Control;
}
```

### Validation
```ts
export interface Validation {
  status: 'init' | 'pending' | 'rejected' | 'fulfilled';
  results?: ValidationError[];
}
```

### Variable
```ts
export type Variable = Record<string, string | number | undefined | null>;
```

### FormListFieldData
```ts
export interface FormListFieldData {
  name: number;
  key: number;
}
```
