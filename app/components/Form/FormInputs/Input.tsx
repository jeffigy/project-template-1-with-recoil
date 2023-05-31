"use client";
import { FC, FunctionComponent, useState } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputGroup,
  InputRightElement,
  Input as input,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "react-feather";
type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  [key: string]: any;
  formHelperText?: string;
};
const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  type,
  formHelperText,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <Field
          as={input}
          id={name}
          name={name}
          placeholder={placeholder}
          type={show ? "text" : type}
          {...rest}
        />
        {type === "password" && (
          <InputRightElement>
            <IconButton
              _hover={{
                bg: "none",
                color: "brand.teal2",
              }}
              bg={"none"}
              color={"brand.teal1"}
              onClick={showPassword}
              aria-label={"show/hide button"}
              icon={show ? <EyeOff /> : <Eye />}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </FormControl>
  );
};

export default Input;
