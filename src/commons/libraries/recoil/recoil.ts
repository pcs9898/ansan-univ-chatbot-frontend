import { RecoilEnv, atom } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export enum inputMethodEnum {
  keyboard = "keyboard",
  microphone = "microphone",
}

export enum languageCodeEnum {
  ko = "ko-KO",
  en = "en-US",
}

export const messageTextState = atom({
  key: "messageTextState",
  default: "",
});

export const inputMethodState = atom({
  key: "inputMethodState",
  default: inputMethodEnum.keyboard,
});

export const isInputButtonLoading = atom({
  key: "isInputButtonLoading",
  default: false,
});

export const languageCodeState = atom({
  key: "languageCode",
  default: languageCodeEnum.ko,
});

export const refreshGreetingState = atom({
  key: "refreshGreetingState",
  default: false,
});
