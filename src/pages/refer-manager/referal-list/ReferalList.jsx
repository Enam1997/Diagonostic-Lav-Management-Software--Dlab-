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
import ReferalListTable from "./ReferalListTable";
import TableDataListPrintButtons from "../../../component/tableDataListPrintButtons/TableDataListPrintButtons";

const ReferalList = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Referral List</PagenameContainer>
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
              <ReferalListTable />
            </Box>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default ReferalList;
