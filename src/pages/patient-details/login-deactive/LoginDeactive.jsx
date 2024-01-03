import { Box, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import PatiensTable from "../patient-list/PatiensTable";
import DeactivateAccountsTable from "./DeactivateAccountsTable";

const LoginDeactive = () => {
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
            <Stack direction="row" justifyContent="end">
              <OutlinedInput size="small" placeholder="Search patient" />
            </Stack>
            <Box mt={2}>
              <DeactivateAccountsTable />
            </Box>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default LoginDeactive;
