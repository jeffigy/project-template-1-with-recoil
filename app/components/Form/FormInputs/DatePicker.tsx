"use client";
import { ErrorMessage, Field } from "formik";
import React, { FunctionComponent } from "react";
import { FormHelperText, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "./TextError";

type DatePickerProps = {
  label: string;
  name: string;
  [key: string]: any;
  formHelperText?: string;
};

const DatePickerComponent: React.FC<DatePickerProps> = ({
  label,
  name,
  formHelperText,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              className="chakra-input css-1f1trk8"
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: Date) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};

export default DatePickerComponent;
