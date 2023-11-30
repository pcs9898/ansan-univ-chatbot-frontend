import {
  INPUT_METHOD_ENUM,
  inputMethodState,
} from "@/src/commons/libraries/recoil/recoil";
import { VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

interface IHomePresenterProps {
  renderedChatList: any;
}

export default function HomePresenter({
  renderedChatList,
}: IHomePresenterProps) {
  const inputMethod = useRecoilValue(inputMethodState);

  return (
    <VStack
      gap="1rem"
      px="1rem"
      w="100%"
      pt="6rem"
      pb={inputMethod === INPUT_METHOD_ENUM.keyboard ? "6rem" : "7.5rem"}
    >
      {renderedChatList}
    </VStack>
  );
}
