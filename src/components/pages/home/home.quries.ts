import { LANGUAGE_CODE_ENUM } from "@/src/commons/libraries/recoil/recoil";
import axios from "axios";

export interface IQueryTextMutationProps {
  message: string;
  languageCode: LANGUAGE_CODE_ENUM;
}

export interface IQueryEventMutationProps {
  postback: string;
  languageCode: LANGUAGE_CODE_ENUM;
}

export async function QueryTextMutation(
  data: IQueryTextMutationProps
): Promise<any> {
  const { message, languageCode } = data;

  const backEndUri = process.env.NEXT_PUBLIC_BACKEND_URI + "askByText" || "";

  const res = await axios.post(backEndUri, {
    message,
    languageCode,
  });
  return res.data;
}

export async function QueryEventMutation(
  data: IQueryEventMutationProps
): Promise<any> {
  const { postback, languageCode } = data;

  const backEndUri = process.env.NEXT_PUBLIC_BACKEND_URI + "askByEvent" || "";

  const res = await axios.post(backEndUri, {
    postback,
    languageCode,
  });
  return res.data;
}
