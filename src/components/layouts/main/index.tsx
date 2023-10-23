import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <Container as="main" p={0} width="100%">
      {children}
    </Container>
  );
}
