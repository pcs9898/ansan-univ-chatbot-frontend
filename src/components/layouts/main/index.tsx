import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <Box as="main" p={0} m={0} width="100%">
      {children}
    </Box>
  );
}
