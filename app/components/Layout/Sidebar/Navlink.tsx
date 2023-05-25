"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
type NavlinkProps = {
  name: string;
  icon?: any;
  to: string;
};

const Navlink: React.FC<NavlinkProps> = ({ name, icon, to }) => {
  const color = useColorModeValue("gray.500", "gray.200");
  const pathname = usePathname();
  const isActive = pathname === to;
  return (
    <Link href={to}>
      <Flex color={isActive ? "blue.500" : color} align={"center"} my={"5px"}>
        <Flex
          borderRadius={"md"}
          borderLeft={"4px solid"}
          borderColor={isActive ? "blue.500" : "transparent"}
          width={"full"}
          px={"10px"}
          py={"10px"}
          bg={isActive ? "blue.50" : "transparent"}
        >
          {icon && <Icon boxSize={"20px"} as={icon} mr={"20px"} />}
          <Text fontSize={"15px"}>{name}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};
export default Navlink;
