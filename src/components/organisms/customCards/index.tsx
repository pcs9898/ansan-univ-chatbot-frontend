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
  // console.log(cardsProps);
  return (
    <Box w="100%">
      <CustomAvatar />

      <Box ml="2.5rem">
        {isLoading ? (
          <LoadingMessage />
        ) : (
          <>
            <CustomCard customCardProps={cardsProps[0]} />
            <Flex
              gap="0.5rem"
              mt="0.5rem"
              overflow="scroll"
              sx={{
                "@media (max-width: 32.3125rem)": {
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                  "::-webkit-scrollbar-thumb": {},
                },
              }}
            >
              {cardsProps.length > 1 &&
                cardsProps
                  .slice(1)
                  .map((cardProps, index) => (
                    <CustomCard key={index + 1} customCardProps={cardProps} />
                  ))}
            </Flex>

            <FormatTime />
          </>
        )}
      </Box>
    </Box>
  );
}

export default memo(CustomCards);
