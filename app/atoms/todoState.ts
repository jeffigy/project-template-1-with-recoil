import { atom, selector } from "recoil";
export type TodoItem = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<TodoItem[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "show all",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    let totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentageCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentageCompleted,
    };
  },
});
