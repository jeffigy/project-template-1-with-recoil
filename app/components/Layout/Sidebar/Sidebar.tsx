import { Card, Flex, Stack, Text } from "@chakra-ui/react";

import React from "react";
import Navlink from "./Navlink";
import { Archive, Layout, ShoppingBag, Map } from "react-feather";
import DarkMode from "./DarkMode";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const NavItems = [
    { name: "Dashboard", icon: Layout, to: "/" },
    { name: "My Orders", icon: ShoppingBag, to: "/orders" },
    { name: "Explore", icon: Map, to: "/explore" },
    { name: "Featured Products", icon: Archive, to: "/products" },
  ];
  return (
    <Card
      position={"sticky"}
      zIndex={"1"}
      pos={"fixed"}
      h={"calc(100vh - 40px)"}
      w={{ base: "50px", xl: "240px" }}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"20px"}
    >
      <Stack>
        {NavItems.map((item) => (
          <Navlink
            key={item.name}
            icon={item.icon}
            name={item.name}
            to={item.to}
          />
        ))}
      </Stack>
      <DarkMode />
    </Card>
  );
};
export default Sidebar;
