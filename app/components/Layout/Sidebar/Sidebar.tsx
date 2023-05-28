"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
} from "@chakra-ui/react";

import React from "react";
import Navlink from "./Navlink";
import { Archive, Layout, ShoppingBag, Map, Plus, List } from "react-feather";
import DarkMode from "./DarkMode";
import Branding from "./Branding";

type SidebarProps = {
  display?: any;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onClose, display }) => {
  const NavItems = [
    { name: "Dashboard", icon: Layout, to: "/" },
    { name: "My Orders", icon: ShoppingBag, to: "/orders" },
    { name: "Explore", icon: Map, to: "/explore" },
    { name: "Featured Products", icon: Archive, to: "/products" },
    { name: "Counter", icon: Plus, to: "/counter" },
    { name: "Todo", icon: List, to: "/todo" },
  ];
  return (
    <Card
      borderRadius={{ base: "none", md: "md" }}
      display={display}
      zIndex={"1"}
      pos={"fixed"}
      h={{ base: "full", md: "calc(100vh - 40px)" }}
      w={{ base: "full", md: "50px", lg: "240px" }}
      p={{ base: "20px", md: "0px", lg: "20px" }}
      pb={{ base: "0px", md: "20px", lg: "0px" }}
    >
      <CardHeader padding={"0px"}>
        <Branding onClose={onClose} />
      </CardHeader>
      <CardBody p={"5px"}>
        <Stack>
          {NavItems.map((item) => (
            <Navlink
              onClose={onClose}
              key={item.name}
              icon={item.icon}
              name={item.name}
              to={item.to}
            />
          ))}
        </Stack>
      </CardBody>
      <CardFooter padding={"0px"} justifyContent={"center"}>
        <DarkMode />
      </CardFooter>
    </Card>
  );
};
export default Sidebar;
