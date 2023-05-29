import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { patientListState } from "../atoms/patientState";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

const NewPatient: React.FC = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [patientList, setPatientList] = useRecoilState(patientListState);

  //id generator
  let id = 0;
  function getId() {
    return id++;
  }

  // add function
  const addItem = () => {
    setPatientList((currList) => [
      ...currList,
      {
        id: getId(),
        fname: fname,
        lname: lname,
      },
    ]);
    setfname("");
    setlname("");
  };

  return (
    <div>
      <HStack spacing={5}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            placeholder="Input first name"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            placeholder="Input last name"
          />
        </FormControl>
      </HStack>
      <Button mt={"10px"} w={"full"} onClick={addItem}>
        Submit
      </Button>
    </div>
  );
};

export default NewPatient;
