"use client";
import {
  Button,
  Icon,
  Text,
  Flex,
  useColorMode,
  Switch,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Moon, Sun } from "react-feather";
type DarkModeProps = {};

const DarkMode: React.FC<DarkModeProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      width={"full"}
      color={colorMode === "dark" ? "blue.500" : "gray.500"}
      align={"center"}
      my={"5px"}
    >
      <Flex
        borderRadius={"md"}
        borderLeft={"4px solid"}
        borderColor={"transparent"}
        px={"10px"}
        py={"10px"}
        width={"full"}
      >
        <Icon boxSize={"20px"} as={Moon} mr={"20px"} />
        <Text fontSize={"15px"}>Dark Theme</Text>
        <Spacer />
        <Switch
          colorScheme="blue"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};
export default DarkMode;
