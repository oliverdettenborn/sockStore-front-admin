import {
  choices,
  number,
  minValue,
  required,
  minLength,
  maxLength,
} from "react-admin";

export const validateName = [required(), minLength(2), maxLength(50)];
export const validateDescription = [required(), minLength(5)];
export const validateSize = choices(
  ["U", "P", "M", "G"],
  "Deve ser único, p, m ou g"
);
export const validateStock = [number(), minValue(0)];
export const validatePrice = [number(), minValue(0)];
