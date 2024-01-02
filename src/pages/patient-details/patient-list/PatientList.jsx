import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";
import { FileText, Printer, Sheet } from "lucide-react";
import PatiensTable from "./PatiensTable";
import Tooltip1 from "../../../component/tooltip/Tooltip1";

const buttons = [
  <Tooltip1 key={1} title={"Hello"}>
    <IconButton>
      <Sheet />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={2}>
    <IconButton>
      <FileText />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={3}>
    <IconButton>
      <FileText />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={4}>
    <IconButton>
      <FileText />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={5}>
    <IconButton>
      <Printer />
    </IconButton>
  </Tooltip1>,
];

const PatientList = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Patient List</PagenameContainer>
      <ScrolabelContainer>
        <Box
          className="page-main-content"
          sx={{
            ".MuiPaper-root": {
              boxShadow: 0,
              // marginBottom:0,
            },
          }}
        >
          <Box className="card1 basic-deatils-form">
            <Stack direction="row" justifyContent="space-between">
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
              <OutlinedInput size="small" placeholder="Search patient" />
            </Stack>
            <Box mt={4}>
              <PatiensTable />
            </Box>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default PatientList;
