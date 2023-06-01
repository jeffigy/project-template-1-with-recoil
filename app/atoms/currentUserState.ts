import { atom, selector } from "recoil";

// synchronous function
export const currentUserIDState = atom({
  key: "currentUserIDState",
  default: 1,
});

export const currentUserNameState = selector({
  key: "currentUserNameState",
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  },
});

//async function
export const currentUserNameQuery = selector({
  key: "currentUserNameQuery",
  get: async ({ get }) => {
    const res = await myDBQuery({
      userID: get(currentUserIDState),
    });
    //error boundary
    if (res.error) {
      throw res.error;
    }
    return res.name;
  },
});

//the code above is only for illustration purposes and does not work
