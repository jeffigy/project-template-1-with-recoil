import React from "react";
import { useRecoilValue } from "recoil";
import {
  currentUserNameQuery,
  currentUserNameState,
} from "../atoms/currentUserState";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const userName = useRecoilValue(currentUserNameState);
  const userName1 = useRecoilValue(currentUserNameQuery);
  return (
    <div>
      <div>{userName}</div>
      <div>{userName1}</div>
    </div>
  );
};
export default page;
