"use client";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const bgColor = useBreakpointValue({
    base: "yellow",
    sm: "blue",
    md: "green",
    lg: "red",
    xl: "orange",
  });

  return (
    <Box bg={bgColor}>
      <Text>{bgColor === "yellow" && "base screen"}</Text>
      <Text>{bgColor === "blue" && "small screen"}</Text>
      <Text>{bgColor === "green" && "medium screen"}</Text>
      <Text>{bgColor === "red" && "large screen"}</Text>
      <Text>{bgColor === "orange" && "xl screen"}</Text>
    </Box>
  );
}
