import {
  Box,
  Button,
  ButtonGroup,
  Grid,
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
import {
  FileText,
  Printer,
  Sheet,
  ShieldAlert,
  SquareUser,
} from "lucide-react";
import ReferalListTable from "./ReferalListTable";

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

const SetReferral = () => {
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
          <p className="title1">Select Ground</p>

          <Grid container className="" columnSpacing={3} rowSpacing={4}>
            <Grid item sm={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Role"
                select
                variant="outlined"
                fullWidth
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
                <MenuItem value="option1">Admin</MenuItem>
                <MenuItem value="option2">Doctor</MenuItem>
                <MenuItem value="option3">Pathologist</MenuItem>
              </TextField>
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Comission For"
                select
                variant="outlined"
                fullWidth
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
                <MenuItem value="option1">Urin</MenuItem>
                <MenuItem value="option2">Blood</MenuItem>
                <MenuItem value="option3">Diogonistick</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Stack alignItems={"end"} mt={2}>
            <Button variant="contained" style={{ height: "40px" }}>
              Filter
            </Button>
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
            <ReferalListTable/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SetReferral;
