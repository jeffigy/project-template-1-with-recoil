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
import React from "react";
import { Edit2 } from "react-feather";

type EditModalProps = {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
};

const EditModal: React.FC<EditModalProps> = ({ onOpen, isOpen, onClose }) => {
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
                <Input placeholder="Input first name" />
              </FormControl>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Input first name" />
              </FormControl>
            </Stack>
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
export default EditModal;
