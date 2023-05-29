import { atom, selector } from "recoil";

export type PatientType = {
  id: number;
  fname: string;
  lname: string;
};

export const patientListState = atom<PatientType[]>({
  key: "patientListState",
  default: [],
});

const patientListFilterState = atom({
  key: "patientListFilterState",
  default: "show all",
});
