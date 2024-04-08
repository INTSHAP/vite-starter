import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export interface FormFieldProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: ValidFieldNames;
  type: ValidFieldTypes;
  valueAsNumber?: boolean;
  register: UseFormRegister<T>;
  error: FieldError;
  placeholder: string;
  label: string;
}

export type ValidFieldNames =
  | "email"
  | "password"
  | "firstname"
  | "lastname"
  | "confirmPassword";

export type ValidFieldTypes = "text" | "number" | "password";
