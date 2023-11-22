import { ReactNode } from "react";
import MainLayout from "./main";
import Header from "../organisms/header";
import { Box } from "@chakra-ui/react";

interface ILayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: ILayoutsProps) {
  return (
    <Box w="100vw" h="100dvh">
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100%"
        zIndex="1"
        borderRadius={0}
        px="1rem"
      >
        <Header />
      </Box>

      <MainLayout>{children}</MainLayout>
    </Box>
  );
}
