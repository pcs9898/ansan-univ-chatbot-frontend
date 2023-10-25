import { RecoilEnv, atom } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export enum INPUT_METHOD_ENUM {
  keyboard = "keyboard",
  microphone = "microphone",
}

export enum LANGUAGE_CODE_ENUM {
  ko = "ko-KO",
  en = "en-US",
}

export const messageTextState = atom({
  key: "messageTextState",
  default: "",
});

export const inputMethodState = atom({
  key: "inputMethodState",
  default: INPUT_METHOD_ENUM.keyboard,
});

export const isInputButtonLoading = atom({
  key: "isInputButtonLoading",
  default: false,
});

export const languageCodeState = atom({
  key: "languageCode",
  default: LANGUAGE_CODE_ENUM.ko,
});

export const refreshGreetingState = atom({
  key: "refreshGreetingState",
  default: false,
});

export const eventNameState = atom({
  key: "eventNameState",
  default: "",
});
