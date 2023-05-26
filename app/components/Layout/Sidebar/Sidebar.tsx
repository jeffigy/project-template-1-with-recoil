import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
} from "@chakra-ui/react";

import React from "react";
import Navlink from "./Navlink";
import { Archive, Layout, ShoppingBag, Map } from "react-feather";
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
  ];
  return (
    <Card
      borderRadius={{ base: "none", md: "md" }}
      display={display}
      zIndex={"1"}
      pos={"fixed"}
      h={{ base: "full", md: "calc(100vh - 40px)" }}
      w={{ base: "full", md: "50px", lg: "240px" }}
      flexDirection={"column"}
      // alignItems={"center"}
      justifyContent={"space-between"}
      p={"20px"}
    >
      <CardHeader padding={"0px"}>
        <Branding onClose={onClose} />
      </CardHeader>
      <CardBody padding={"0px"}>
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
      <CardFooter padding={"0px"}>
        <DarkMode />
      </CardFooter>
    </Card>
  );
};
export default Sidebar;
