import { bottomListRefState } from "@/src/commons/libraries/recoil/recoil";
import { Box, Flex, Show } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { ReactNode, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import Header from "../organisms/header";
import MainLayout from "./main";
import dynamic from "next/dynamic";

const AsideCard = dynamic(() => import("../organisms/aisdeCard"));

interface ILayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: ILayoutsProps) {
  const setBottomListRef = useSetRecoilState(bottomListRefState);
  const bottomScrollRef = useRef(null);

  useEffect(() => {
    setBottomListRef(bottomScrollRef);
  }, []);

  return (
    <Flex
      justifyContent="center"
      w="100%"
      h="100dvh"
      overflowY="auto"
      overflowX="hidden"
      borderRadius="0px"
      gap="2.25rem"
      ref={bottomScrollRef}
      //@ts-ignore
      styles={css`
        /* Chrome, Edge, and Safari */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Firefox */
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
      `}
    >
      <Box w={{ base: "100%", lg: "40rem" }} maxW="40rem" borderRadius="0px">
        <Box
          position="fixed"
          top={0}
          w="100%"
          maxW="40rem"
          zIndex="1"
          borderRadius={0}
          px="1rem"
        >
          <Header />
        </Box>

        <MainLayout>{children}</MainLayout>
      </Box>
      <Show above="lg">
        <Flex
          position="sticky"
          top={0}
          bottom={0}
          h="100dvh"
          alignItems="center"
        >
          <AsideCard />
        </Flex>
      </Show>
    </Flex>
  );
}
