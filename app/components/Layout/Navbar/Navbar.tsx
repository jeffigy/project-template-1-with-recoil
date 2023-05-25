import { Card, Flex, Text } from "@chakra-ui/react";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Card
      direction={"row"}
      borderRadius={"md"}
      zIndex={1}
      ml={{ base: 0, md: "260px" }}
      top={0}
      position={"sticky"}
      h={"50px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"10px"}
    >
      <Text>navbar</Text>
      <Text>navbar</Text>
      <Text>navbar</Text>
      <Text>navbar</Text>
    </Card>
  );
};
export default Navbar;
