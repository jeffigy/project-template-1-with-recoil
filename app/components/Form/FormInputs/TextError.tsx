"use client";
import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export interface TextErrorProps {
  children: ReactNode;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return <Text color={"red"}>{children}</Text>;
};

export default TextError;
