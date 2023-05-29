import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atoms/todoState";

type TodoListFIltersProps = {};

const TodoListFIlters: React.FC<TodoListFIltersProps> = () => {
  const [filter, setfilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setfilter(value);
  };
  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show all">All</option>
        <option value="Show Complete">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};
export default TodoListFIlters;
