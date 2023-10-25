import { languageCodeEnum } from "@/src/commons/libraries/recoil/recoil";
import axios, { AxiosError } from "axios";

export interface IQueryTextMutationProps {
  message: string;
  languageCode: languageCodeEnum;
}

export async function QueryTextMutation(
  data: IQueryTextMutationProps
): Promise<any> {
  const { message, languageCode } = data;

  const backEndUri = process.env.NEXT_PUBLIC_BACKEND_URI || "";

  const res = await axios.post(backEndUri, {
    message,
    languageCode,
  });
  return res.data;
}
