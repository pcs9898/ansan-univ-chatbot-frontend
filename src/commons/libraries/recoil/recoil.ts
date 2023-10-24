import { RecoilEnv, atom } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const messageTextState = atom({
  key: "messageTextState",
  default: "",
});

export const inputMethodState = atom({
  key: "inputMethodState",
  default: "keyboard",
});
