"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
type NavlinkProps = {
  name: string;
  icon?: any;
  to: string;
  onClose: () => void;
};

const Navlink: React.FC<NavlinkProps> = ({ name, icon, to, onClose }) => {
  const color = useColorModeValue("gray.500", "gray.200");
  const bgColor = useColorModeValue("blue.50", "blue.100");
  const pathname = usePathname();
  const isActive = pathname === to;
  return (
    <Link href={to}>
      {/* <Flex
        justifyContent={"center"}
        p={"5px 10px"}
        w={"full"}
        alignItems={"center"}
        border={"1px solid"}
      >
        <Icon boxSize={"20px"} as={icon} />
      </Flex> */}
      <Flex
        justifyContent={{ base: "left", md: "center", lg: "left" }}
        color={isActive ? "blue.500" : color}
        my={"5px"}
        onClick={onClose}
        borderRadius={{ base: "md", md: "50px", lg: "md" }}
        borderLeft={{
          base: "none",
          lg: isActive ? "4px solid" : "4px solid transparent",
        }}
        borderColor={isActive ? "blue.500" : "transparent"}
        pl={{ base: "10px", md: "0px", lg: "10px" }}
        py={"10px"}
        bg={isActive ? bgColor : "transparent"}
      >
        {icon && (
          <Icon
            boxSize={"20px"}
            as={icon}
            mr={{ base: "20px", md: "0px", lg: "20px" }}
          />
        )}
        <Text
          display={{ base: "block", md: "none", lg: "block" }}
          fontSize={"15px"}
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
export default Navlink;
