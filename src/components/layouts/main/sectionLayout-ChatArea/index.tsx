import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionLayoutChatAreaProps {
  children: ReactNode;
}

export default function SectionLayoutChatArea({
  children,
}: ISectionLayoutChatAreaProps) {
  return (
    <Box as="section" id="chat-area" overflowY="auto">
      {children}
    </Box>
  );
}
