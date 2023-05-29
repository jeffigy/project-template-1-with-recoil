"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState, filteredTodoListState } from "../atoms/todoState";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import New from "./new";
import TodoListStats from "../components/TodoListStats";
import TodoListFIlters from "../components/TodoListFIlters";

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <New />
      <br />
      <TodoListFIlters />
      <br />

      <TodoListStats />
      <br />
      {todoList.map((todo: any) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};
export default TodoList;
