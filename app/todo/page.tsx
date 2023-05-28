"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoState";
import Link from "next/link";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div>
      <Link href="todo/new">Todo</Link>
      <br />
      todo TodoList
    </div>
  );
};
export default TodoList;
