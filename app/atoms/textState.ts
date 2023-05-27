import { atom } from "recoil";

export interface textSnippet {
  key: string;
  default: string;
}
export const textState = atom({
  key: "textState",
  default: "",
});
