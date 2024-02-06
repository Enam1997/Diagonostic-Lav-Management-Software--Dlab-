import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileText, Printer, Sheet, ShieldAlert } from "lucide-react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import DeactivateAccountList from "./DeactivateAccountList";

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

const LoginDeactiveEmployee = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>LoginDeactive</PagenameContainer>
      <Box
        className="page-main-content"
        sx={{
          ".MuiPaper-root": {
            boxShadow: 0,
            // marginBottom:0,
          },
        }}
      >
        <Box className="card1 basic-deatils-form" mb={2} mt={2}>
          <p className="title1">Add Designation</p>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"
                label="Role"
                select
                variant="outlined"
                value={""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ShieldAlert />
                    </InputAdornment>
                  ),
                }}
                SelectProps={{
                  displayEmpty: true, // To show an empty option initially
                }}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="option1">Doctor</MenuItem>
                <MenuItem value="option2">Admin</MenuItem>
                <MenuItem value="option3">Accountant</MenuItem>
              </TextField>
            </Stack>
            <Stack alignItems={"end"}>
              <Button variant="contained" style={{ height: "40px" }}>
                Filter
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Box className="card1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <Stack direction="row" justifyContent="space-between">
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
              <OutlinedInput size="small" placeholder="Search patient" />
            </Stack>
            <DeactivateAccountList/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginDeactiveEmployee;
