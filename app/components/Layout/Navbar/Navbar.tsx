"use client";
import { Avatar, Card, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Menu } from "react-feather";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import DrawerButton from "./DrawerButton";
type NavbarProps = { btnRef: any; onClick: () => void };

const Navbar: React.FC<NavbarProps> = ({ btnRef, onClick }) => (
  <Card
    direction={"row"}
    borderRadius={"md"}
    zIndex={1}
    ml={{ base: 0, md: "70px", lg: "260px" }}
    top={"20px"}
    position={"sticky"}
    h={"50px"}
    justifyContent={"space-between"}
    alignItems={"center"}
    px={"10px"}
  >
    <DrawerButton btnRef={btnRef} onClick={onClick} />
    <Text>Branding</Text>
    <Avatar size={"xs"} />
  </Card>
);
export default Navbar;
