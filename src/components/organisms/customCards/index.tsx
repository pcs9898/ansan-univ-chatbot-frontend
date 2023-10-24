import CustomAvatar from "@/components/molecules/customAvatar";
import CustomCard from "@/components/molecules/customCard";
import FormatTime from "@/components/molecules/formatTime";
import { Box, Flex } from "@chakra-ui/react";

interface ICardsProps {
  cardsProps: {
    texts: string[];
    buttons?: {
      buttonText: string;
      link?: string;
      postBack?: string;
    }[];
  }[];
}

export default function customCards({ cardsProps }: ICardsProps) {
  return (
    <>
      <CustomAvatar />

      <Box ml="2.5rem">
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
          {cardsProps.slice(1).map((cardProps, index) => (
            <CustomCard key={index + 1} customCardProps={cardProps} />
          ))}
        </Flex>

        <FormatTime />
      </Box>
    </>
  );
}
