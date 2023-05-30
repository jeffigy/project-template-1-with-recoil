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
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { Edit2, Trash2 } from "react-feather";

type DeleteModalProps = {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  onOpen,
  isOpen,
  onClose,
}) => {
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
          <ModalBody>
            <Text></Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default DeleteModal;
