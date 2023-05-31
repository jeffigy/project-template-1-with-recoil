"use client";
import React, { FunctionComponent } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
type RadioButtonProps = {
  [key: string]: any;
  label: string;
  name: string;
  options: any[];
  formHelperText?: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  options,
  formHelperText,
  ...rest
}) => {
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field name={name} {...rest}>
        {({ field, form: { setFieldValue } }: any) => (
          <RadioGroup
            onChange={(value) => setFieldValue(name, value)}
            value={field.value}
          >
            <Stack spacing={3}>
              {options.map((option) => (
                <Radio
                  key={option.key}
                  id={option.value}
                  value={option.value}
                  isChecked={field.value === option.value}
                >
                  {option.key}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      </Field>
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </FormControl>
  );
};
export default RadioButton;
