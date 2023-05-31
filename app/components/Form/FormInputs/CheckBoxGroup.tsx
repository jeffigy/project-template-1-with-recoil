"use client";
import React, { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
type CheckBoxGroupProps = {
  [key: string]: any;
  label: string;
  name: string;
  options: any[];
  formHelperText?: string;
};

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
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
          <CheckboxGroup
            onChange={(values) => setFieldValue(name, values)}
            value={field.value}
          >
            <Stack spacing={3}>
              {options.map((option) => (
                <Checkbox
                  key={option.key}
                  id={option.value}
                  value={option.value}
                  isChecked={
                    field.value ? field.value.includes(option.value) : false
                  }
                >
                  {option.key}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        )}
      </Field>
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </FormControl>
  );
};
export default CheckBoxGroup;
