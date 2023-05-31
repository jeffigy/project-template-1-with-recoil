"use client";
import { Button, Card, CardBody, Flex } from "@chakra-ui/react";
import FormikControl from "../components/Form/FormikControl";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Input from "../components/Form/FormInputs/Input";
import RadioButton from "../components/Form/FormInputs/RadioButton";
type RegisterProps = {};

const modeOfContact = [
  { key: "Email", value: "emailmoc" },
  { key: "Phone", value: "phonemoc" },
];
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  modeOfContact: "",
  phoneNumber: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  modeOfContact: Yup.string().required("Mode of contact is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^(09)\d{9}$/,
      "Phone number must be a valid 11-digit number starting with '09'"
    ),
});
const onSubmit = (values: any) => {
  console.log("Form data", values);
};
const Register: React.FC<RegisterProps> = () => {
  return (
    <Flex justifyContent={"center"}>
      <Card w={"450px"}>
        <CardBody>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <Form>
                <FormikControl
                  control={"input"}
                  label={"Email"}
                  type={"email"}
                  name={"email"}
                  formHelperText={"example@mail.com"}
                />
                <FormikControl
                  control={"input"}
                  label={"Password"}
                  type={"password"}
                  name={"password"}
                  formHelperText={
                    "password must be atleast 8 characters long, has atleast 1 capital letter, and 1 number"
                  }
                />
                <FormikControl
                  control="input"
                  label={"Confirm Password"}
                  type={"password"}
                  name={"confirmPassword"}
                />
                <FormikControl
                  control="radio"
                  label={"Mode of Contact"}
                  name={"modeOfContact"}
                  options={modeOfContact}
                />
                <FormikControl
                  control={"input"}
                  label={"Phone Number"}
                  type={"text"}
                  name={"phoneNumber"}
                />
                <Button type="submit" w={"full"} borderRadius={"md"}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Flex>
  );
};
export default Register;
