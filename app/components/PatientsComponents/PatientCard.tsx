import { patientListState } from "@/app/atoms/patientState";
import {
  Card,
  CardHeader,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Edit2, Trash2 } from "react-feather";
import { useRecoilState } from "recoil";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

type PatientCardProps = {
  patient: any;
};

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  const [patientList, setPatientList] = useRecoilState(patientListState);
  const index = patientList.findIndex((item) => item === patient);

  const deleteItem = () => {
    const newList = removeItemAtIndex(patientList, index);
    setPatientList(newList);
  };
  return (
    <Card w={"full"} padding={"10px"} my={"10p"}>
      <Flex p={"10px"} justifyContent={"space-between"} alignItems={"center"}>
        <Text>
          {" "}
          {patient.fname} {patient.lname}
        </Text>
        <HStack>
          <EditModal
            patient={patient}
            index={index}
            patientList={patientList}
            setPatientList={setPatientList}
          />
          <DeleteModal patient={patient} onClick={deleteItem} />
        </HStack>
      </Flex>
    </Card>
  );
};

function removeItemAtIndex(arr: any, index: any) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
export default PatientCard;
