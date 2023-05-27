"use client";
import DashboardLayout from "./components/Layout/layout";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import { RecoilRoot } from "recoil";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}
