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
      mt="5rem"
      mb="4rem"
      width="100%"
      borderRadius="0px"
    >
      <SectionLayoutChatArea>{children}</SectionLayoutChatArea>
      <SectionLayoutInputArea />
    </Box>
  );
}
