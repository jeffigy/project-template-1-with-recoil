"use client";
import React, { FunctionComponent } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
type TextAreaProps = {
  label: string;
  name: string;
  placeholder: string;
  [key: string]: any;
  formHelperText?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  formHelperText,
  ...rest
}) => {
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field as={Textarea} id={name} name={name} {...rest} />
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </FormControl>
  );
};
export default TextArea;
