"use client";
import React, { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Select as select,
} from "@chakra-ui/react";
type SelectProps = {
  label: string;
  name: string;
  options: any[];
  placeholder: string;
  [key: string]: any;
  formHelperText?: string;
};

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  formHelperText,
  ...rest
}) => {
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field as={select} id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </FormControl>
  );
};
export default Select;
