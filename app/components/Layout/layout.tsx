"use client";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect } from "react";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Get the current breakpoint value
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Close the Drawer if the screen size is above md
  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile, isOpen, onClose]);
  return (
    <Flex flexDirection={"column"} minH={"100vh"} p={"20px"}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.100">
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Navbar btnRef={btnRef} onClick={onOpen} />
      <Flex
        mt={"20px"}
        flex={1}
        flexDirection={"column"}
        ml={{ base: 0, md: "70px", lg: "260px" }}
      >
        {children}
      </Flex>
    </Flex>
    // </Providers>
  );
};
export default DashboardLayout;
