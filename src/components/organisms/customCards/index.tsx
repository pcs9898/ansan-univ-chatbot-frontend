import { Box, Flex } from "@chakra-ui/react";
import CustomAvatar from "../../molecules/customAvatar";
import CustomCard from "../../molecules/customCard";
import FormatTime from "../../molecules/formatTime";
import LoadingMessage from "../../molecules/loadingMessage";
import { memo } from "react";

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

      <Flex flexDir="column" w="98%" overflowX="hidden">
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
                  "@media (max-width: 32.3125rem)": {
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                    "::-webkit-scrollbar-thumb": {},
                  },
                  scrollSnapType: "x mandatory",
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
