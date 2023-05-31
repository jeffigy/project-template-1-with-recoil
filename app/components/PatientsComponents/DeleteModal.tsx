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
  Text,
  IconButton,
  Flex,
  Stack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Trash2 } from "react-feather";

type DeleteModalProps = {
  // onOpen: () => void;
  // isOpen: boolean;
  // onClose: () => void;
  patient: any;
  onClick: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({ patient, onClick }) => {
  const { fname, lname } = patient;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Delete"
        colorScheme="red"
        icon={<Trash2 />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Patient</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={5}>
            <Stack spacing={5}>
              <Text>Are you sure on removing/deleting the patient below? </Text>
              <Text fontWeight={"bold"}>
                {`${fname}
              ${lname}`}
              </Text>
            </Stack>
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              {" "}
              No
            </Button>
            <Button variant="ghost" colorScheme="red" onClick={onClick}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default DeleteModal;
