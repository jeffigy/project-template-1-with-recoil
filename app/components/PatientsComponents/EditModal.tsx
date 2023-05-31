"use client";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Edit2 } from "react-feather";

type EditModalProps = {
  index: any;
  patient: any;
  patientList: any;
  setPatientList: any;
};

const EditModal: React.FC<EditModalProps> = ({
  patient,
  patientList,
  setPatientList,
  index,
}) => {
  const editItem = () => {
    const newList = replaceItemAtIndex(patientList, index, {
      ...patient,
      fname: newFName,
      lname: newLName,
    });
    setPatientList(newList);
    onClose();
  };

  const [newFName, setNewFName] = useState(patient.fname);
  const [newLName, setNewLName] = useState(patient.lname);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Delete"
        colorScheme="yellow"
        icon={<Edit2 />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Patient</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  value={newFName}
                  onChange={(e) => setNewFName(e.target.value)}
                  placeholder="Input first name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  value={newLName}
                  onChange={(e) => setNewLName(e.target.value)}
                  placeholder="Input first name"
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost" colorScheme="blue" onClick={editItem}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
function replaceItemAtIndex(arr: any, index: any, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
export default EditModal;
