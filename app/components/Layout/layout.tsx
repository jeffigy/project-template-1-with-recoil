import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    // <Providers>
    <Flex flexDirection={"column"} minH={"100vh"} p={"20px"}>
      <Navbar />
      <Sidebar />
      <Flex
        mt={"20px"}
        flex={1}
        flexDirection={"column"}
        ml={{ base: 0, md: "260px" }}
      >
        {children}
      </Flex>
    </Flex>
    // </Providers>
  );
};
export default DashboardLayout;
