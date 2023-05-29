"use client";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { atom } from "recoil";
import { todoListState } from "../atoms/todoState";

const New: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };
  return (
    <div>
      <FormControl mb={"10px"}>
        <FormLabel>Note name</FormLabel>
        <Input
          //invoke input value
          value={inputValue}
          onChange={onChange}
          placeholder="sample note"
        ></Input>
      </FormControl>
      <Button w={"full"} onClick={addItem}>
        Add
      </Button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}

export default New;
