import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../atoms/todoState";

type TodoListStatsProps = {};

const TodoListStats: React.FC<TodoListStatsProps> = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentageCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentageCompleted);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not complete: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};
export default TodoListStats;
