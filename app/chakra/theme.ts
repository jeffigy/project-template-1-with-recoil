import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  colors: {
    brand: {
      PrimaryColor: "#9146FF",
      SecondaryColor: "#8205b4",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        backgroundColor: props.colorMode === "light" ? "brand.400" : "#0e0e10",
        // color: props.colorMode === "light" ? "gray.600" : "white",
      },
    }),
  },
});
