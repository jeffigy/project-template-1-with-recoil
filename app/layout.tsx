"use client";
import DashboardLayout from "./components/Layout/layout";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
export const metadata = {
  title: "Reusable Dashboard",
  description: "Reusable Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <DashboardLayout>{children}</DashboardLayout>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
