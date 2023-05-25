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
import { Moon } from "react-feather";
type DarkModeProps = {};

const DarkMode: React.FC<DarkModeProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //   return (
  // <header>
  //   <Button onClick={toggleColorMode}>
  //     Toggle {colorMode === "light" ? "Dark" : "Light"}
  //   </Button>
  // </header>
  //   );
  return (
    <Flex width={"full"} color={"blue.500"} align={"center"} my={"5px"}>
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
