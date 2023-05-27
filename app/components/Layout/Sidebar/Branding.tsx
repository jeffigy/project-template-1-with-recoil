"use client";
import { CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

type BrandingProps = { onClose: () => void };

const Branding: React.FC<BrandingProps> = ({ onClose }) => {
  return (
    <Flex
      px={"20px"}
      mb={"50px"}
      justifyContent={{ base: "space-between", md: "center" }}
      align={"center"}
      h={"80px"}
    >
      <Text
        display={{ base: "block", md: "none", lg: "block" }}
        color={"brand.200"}
        fontWeight={"bold"}
        fontSize={"30px"}
      >
        Branding
      </Text>
      <CloseButton
        display={{ base: "flex", md: "none" }}
        border={"1px solid"}
        onClick={onClose}
      />
    </Flex>
  );
};
export default Branding;
