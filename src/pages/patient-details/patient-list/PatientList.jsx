import { Box, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";

import PatiensTable from "./PatiensTable";
import TableDataListPrintButtons from "../../../component/tableDataListPrintButtons/TableDataListPrintButtons";

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
              <TableDataListPrintButtons />
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
