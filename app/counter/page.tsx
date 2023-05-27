"use client";
import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { textState } from "../atoms/textState";
import { useRecoilState } from "recoil";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: any) => setText(event.target.value);
  return (
    <div>
      <Input type="text" name={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};
export default page;
