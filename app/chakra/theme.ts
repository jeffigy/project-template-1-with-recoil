"use client";
import { extendTheme, useColorMode, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    body: "Inter, sans-serif",
  },
});
