"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { patientListState } from "../atoms/patientState";
import NewPatient from "./newPatient";
import PatientCard from "../components/PatientsComponents/PatientCard";
import { Center, Text } from "@chakra-ui/react";

type PatientsProps = {};

const Patients: React.FC<PatientsProps> = () => {
  const PatientList = useRecoilValue(patientListState);
  return (
    <div>
      <NewPatient />

      <Center>
        <Text my={"20px"} fontSize={"30px"} fontWeight={"bold"}>
          List of patients
        </Text>
      </Center>
      {PatientList.map((patient: any) => (
        <PatientCard patient={patient} />
      ))}
    </div>
  );
};
export default Patients;
