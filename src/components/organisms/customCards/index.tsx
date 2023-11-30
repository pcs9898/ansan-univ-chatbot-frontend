import { Flex } from "@chakra-ui/react";
import { memo } from "react";
import CustomAvatar from "../../molecules/customAvatar";
import CustomCard from "../../molecules/customCard";
import FormatTime from "../../molecules/formatTime";
import LoadingMessage from "../../molecules/loadingMessage";

interface ICardsProps {
  cardsProps?: {
    texts: string[];
    buttons?: {
      buttonText: string;
      link?: string;
      postBack?: string;
    }[];
  }[];
  isLoading?: boolean;
}

function CustomCards({ cardsProps, isLoading }: ICardsProps) {
  return (
    <Flex gap="0.5rem" w="100%" borderRadius="0px">
      <CustomAvatar />

      <Flex flexDir="column" w="98%" overflowX="hidden" borderRadius="0px">
        {isLoading ? (
          <LoadingMessage />
        ) : (
          <>
            <CustomCard customCardProps={cardsProps[0]} />

            {cardsProps.length > 1 && (
              <Flex
                gap="0.5rem"
                mt="0.5rem"
                overflowX="auto"
                sx={{
                  scrollSnapType: "x mandatory",
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                  "@media (min-width: 32.3125rem)": {
                    "&:hover": {
                      // Webkit 스크롤바 스타일링
                      "::-webkit-scrollbar": {
                        display: "block",
                        height: "8px",
                      },
                      "::-webkit-scrollbar-track": {
                        background: "transparent",
                      },
                      "::-webkit-scrollbar-thumb": {
                        background: "#888",
                        borderRadius: "4px",
                      },
                      "::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                      },
                      // Firefox 스크롤바 스타일링
                      scrollbarWidth: "thin",
                      scrollbarColor: "#888 #f1f1f1",
                    },
                  },
                }}
                borderRadius="0px"
                w="100%"
              >
                {cardsProps.slice(1).map((cardProps, index) => (
                  <CustomCard key={index + 111} customCardProps={cardProps} />
                ))}
              </Flex>
            )}

            <FormatTime />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default memo(CustomCards);
