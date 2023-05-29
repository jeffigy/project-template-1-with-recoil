import { patientListState } from "@/app/atoms/patientState";
import { Card, CardHeader, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";

type PatientCardProps = {
  patient: any;
};

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  const [patientList, setpatientList] = useRecoilState(patientListState);

  return (
    <Card w={"full"} padding={"10px"} my={"10px"}>
      <Text>
        {" "}
        {patient.fname} {patient.lname}
      </Text>
    </Card>
  );
};
export default PatientCard;
