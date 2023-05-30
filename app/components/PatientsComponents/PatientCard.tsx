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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      onClick={onOpen}
      w={"full"}
      padding={"10px"}
      my={"10px"}
      cursor={"pointer"}
    >
      <Flex p={"10px"} justifyContent={"space-between"} alignItems={"center"}>
        <Text>
          {" "}
          {patient.fname} {patient.lname}
        </Text>
        <HStack>
          <EditModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          <DeleteModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </HStack>
      </Flex>
    </Card>
  );
};
export default PatientCard;
