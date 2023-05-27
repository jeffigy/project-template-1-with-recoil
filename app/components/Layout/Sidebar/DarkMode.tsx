"use client";
import {
  Button,
  Icon,
  Text,
  Flex,
  useColorMode,
  Switch,
  Spacer,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { Moon, Sun } from "react-feather";
type DarkModeProps = {};

const DarkMode: React.FC<DarkModeProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        width={"full"}
        color={colorMode === "dark" ? "blue.500" : "gray.500"}
        align={"center"}
        my={"5px"}
        display={{ base: "flex", md: "none", lg: "flex" }}
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

      <IconButton
        onClick={toggleColorMode}
        variant={"ghost"}
        size={"sm"}
        color={"blue.500"}
        display={{ base: "none", md: "flex", lg: "none" }}
        aria-label="dark mode"
        icon={colorMode === "dark" ? <Moon /> : <Sun />}
      />
    </>
  );
};
export default DarkMode;
