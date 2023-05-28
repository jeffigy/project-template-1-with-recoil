"use client";
import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { charCountState, textState } from "../atoms/textState";
import { useRecoilState, useRecoilValue } from "recoil";
type pageProps = {};

const Page: React.FC<pageProps> = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: any) => setText(event.target.value);
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <Input type="text" name={text} onChange={onChange} />
      <br />
      Echo: {text}
      <br />
      Character Count: {count}
    </div>
  );
};
export default Page;
