---
title: Documents
---

## Demo

### NormalForm
<code src="../examples/NormalForm.tsx"></code>

### InitialValue
<code src="../examples/InitialValue.tsx"></code>

### Validation
<code src="../examples/ComplexForm/ValidationBase.tsx" debug></code>
<code src="../examples/ComplexForm/Validation.tsx"></code>

## API

### Form
The root element of the form, no actual DOM node will be created
| property        | description        | type                                      | default value |
| --------------- | ------------------ | ----------------------------------------- | ------------- |
| children        | `React.ReactNode`  | `React.ReactNode`                         | `null`        |
| control         | Form Control       | `Control`                                 | `void`        |
| rules           | Verification rules | `Omit<Rule, 'validateTrigger'>[]`         | `void`        |
| validateMode    | validate mode      | `ValidateMode`                            | `serial`      |
| validateTrigger | validate trigger   | `ValidateTrigger`                         | `onChange`    |
| ref             | React.Ref          | `React.Ref<Control \| undefined \| null>` | `void`        |
| initialValues   | initialValues      | `any`                                     | `void`        |

### Form.Group
Similar to Form, with an additional name attribute
| property        | description                                          | type                                      | default value |
| --------------- | ---------------------------------------------------- | ----------------------------------------- | ------------- |
| children        | `React.ReactNode`                                    | `React.ReactNode`                         | `null`        |
| control         | Form Control                                         | `Control`                                 | `void`        |
| rules           | Verification rules                                   | `Omit<Rule, 'validateTrigger'>[]`         | `void`        |
| validateMode    | validate mode                                        | `ValidateMode`                            | `serial`      |
| validateTrigger | validate trigger                                     | `ValidateTrigger`                         | `onChange`    |
| ref             | React.Ref                                            | `React.Ref<Control \| undefined \| null>` | `void`        |
| initialValue    | If a parent control exists, it will not take effect. | `any`                                     | `void`        |
| name            | input name                                           | `NamePath`                                | `void`        |

### Form.Item
The smallest unit of a form, used to control input, select, or custom form controls (needs to support attributes value and onChange)
| property        | description                                          | type                                      | default value |
| --------------- | ---------------------------------------------------- | ----------------------------------------- | ------------- |
| children        | Input box                                            | `React.ReactElement`                      | `null`        |
| control         | Form Control                                         | `Control`                                 | `void`        |
| rules           | Verification rules                                   | `Omit<Rule, 'validateTrigger'>[]`         | `void`        |
| validateMode    | validate mode                                        | `ValidateMode`                            | `serial`      |
| validateTrigger | validate trigger                                     | `ValidateTrigger`                         | `onChange`    |
| ref             | React.Ref                                            | `React.Ref<Control \| undefined \| null>` | `void`        |
| initialValue    | If a parent control exists, it will not take effect. | `any`                                     | `void`        |
| name            | input name                                           | `NamePath`                                | `void`        |

### Form.List
Used to render array type form data
| property        | description                                          | type                                                                 | default value |
| --------------- | ---------------------------------------------------- | -------------------------------------------------------------------- | ------------- |
| children        | child elements                                       | `(fields: FormListFieldData[], control: Control) => React.ReactNode` | `null`        |
| control         | Form Control                                         | `Control`                                                            | `void`        |
| rules           | Verification rules                                   | `Omit<Rule, 'validateTrigger'>[]`                                    | `void`        |
| validateMode    | validate mode                                        | `ValidateMode`                                                       | `serial`      |
| validateTrigger | validate trigger                                     | `ValidateTrigger`                                                    | `onChange`    |
| ref             | React.Ref                                            | `React.Ref<Control \| undefined \| null>`                            | `void`        |
| initialValue    | If a parent control exists, it will not take effect. | `any`                                                                | `void`        |
| name            | input name                                           | `NamePath`                                                           | `void`        |

### Form.useControl
Create a Form Control
```ts
type useControl = (control?: Control) => Control
```

### Form.useControlInstance
The current control example, `root` is `true` to get the top instance
```ts
type useControl = (root?: boolean) => Control | undefined
```

### Form.useOnValueChange
```ts
type useOnValueChange = <T = any>(fn: ({ newValue: T, oldValue: T }) => void, control?: Control) => void;
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
