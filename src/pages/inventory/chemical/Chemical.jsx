import {
  Box,
  ButtonGroup,
  IconButton,
  OutlinedInput,
  Stack,
  Tab,
} from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileText, Printer, Sheet } from "lucide-react";
import ChemicalList from "./ChemicalList";
import CreateChemical from "./CreateChemical";
import TableDataListPrintButtons from "../../../component/tableDataListPrintButtons/TableDataListPrintButtons";

const Chemical = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Iventory</PagenameContainer>
      <Box
        className="page-main-content"
        sx={{
          ".MuiPaper-root": {
            boxShadow: 0,
            // marginBottom:0,
          },
        }}
      >
        <Box className="card1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Checmical List" value="1" />
                  <Tab label="Create Checmical" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Stack direction="row" justifyContent="space-between">
                  <TableDataListPrintButtons />
                  <OutlinedInput size="small" placeholder="Search patient" />
                </Stack>
                <ChemicalList />
              </TabPanel>
              <TabPanel value="2">
                <CreateChemical />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Chemical;
