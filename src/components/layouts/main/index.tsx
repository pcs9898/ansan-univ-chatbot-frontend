import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import SectionLayoutChatArea from "./sectionLayout-ChatArea";
import SectionLayoutInputArea from "./sectionLayout-InputArea";

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <Box
      as="main"
      p={0}
      m={0}
      mt="3.5rem"
      mb="3.5rem"
      width="100%"
      height="calc(100vh - 7rem)"
      borderRadius={0}
    >
      <SectionLayoutChatArea>{children}</SectionLayoutChatArea>
      <SectionLayoutInputArea />
    </Box>
  );
}
