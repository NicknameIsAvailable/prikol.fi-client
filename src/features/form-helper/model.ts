import { RegisterOptions, UseFormReturn } from "react-hook-form";

type InputType =
  | 'text'
  | 'password'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'email'
  | 'url'
  | 'tel'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'file'
  | 'color'
  | 'range'
  | 'hidden'
  | 'submit'
  | 'reset'
  | 'button';


export interface IFormInputData {
    name: string;
    type: InputType;
    label: string;
    placeholder: string;
    rules: RegisterOptions;
}

export interface IPasswordInputProps {
  field: IFormInputData;
}

export interface IFormHelperProps {
    fields: IFormInputData[];
    form: UseFormReturn<any, any, undefined>;
}
