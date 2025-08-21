export type Name = string | number;

export type NamePaths = Name[];

export type NonNullableNamePaths = [Name, ...NamePaths];

export type NamePath = Name | NamePaths;

export interface ValidateOptions {
  thrownTypes?: ValidateType[];
}

export enum FormStoreType {
  Group = 'group',
  List = 'list',
  Item = 'item',
}

export interface Control<Value = any> {
  getValue: () => Value;
  getStrictValue: <R = Value>(name?: NamePath[]) => R;
  getName: () => NonNullableNamePaths | undefined;
  getFullName: () => NonNullableNamePaths | undefined;
  setValue: (value?: Value) => Value;
  setFieldValue: (name: NamePath, value: any) => void;
  isTouched: () => boolean;
  reset: () => void;
  validate: (options?: ValidateOptions) => Promise<Value>;
  validateFields: <R = Value>(name?: NamePath[], options?: ValidateOptions & { recursive: boolean }) => Promise<R>;
  validateOnly: () => void;
  getValidationErrors: () => ValidationError[] | undefined;
  clearValidation: () => void;
  add: <T = any>(initialValue?: T, insertIndex?: number) => void;
  remove: (index: number) => void;
  move: (from: number, to: number) => void;
  get: (name?: NamePath) => this | undefined;
  getStoreStype(): FormStoreType;
}

export type ValidateTrigger = 'onChange' | 'onBlur' | 'onFocus';

/**
 * @default 'error'
 * @description Error Type.
 */
export type ValidateType = 'error' | 'warning';

/**
 * @default 'serial'
 */
export type ValidateMode = 'parallel' | 'serial';

export interface Rule {
  type?: ValidateType;
  validateTrigger?: ValidateTrigger[] | ValidateTrigger;
  validator: (control: Control) => Promise<any>;
}

export interface ValidationError {
  type: ValidateType;
  message: string;
  control: Control;
}

export interface Validation {
  status: 'init' | 'pending' | 'rejected' | 'fulfilled';
  results?: ValidationError[];
}

export type Variable = Record<string, string | number | undefined | null>;

export interface FormListFieldData {
  name: number;
  key: number;
}
