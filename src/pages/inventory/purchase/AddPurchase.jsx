import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { Save, ShieldAlert, UserRound } from "lucide-react";
import React from "react";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";
import AddPurchaseProductTable from "./AddPurchaseProductTable";

const AddPurchase = () => {
  return (
    <Box mt={2} className="create-test-form">
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Supplier"
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
            <MenuItem value="option1">Enam</MenuItem>
            <MenuItem value="option2">Rahat</MenuItem>
            <MenuItem value="option3">Murad</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Bill Number"
            placeholder="Enter Test Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserRound />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Purchase Status"
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
            <MenuItem value="option1">Orderd</MenuItem>
            <MenuItem value="option2">Recived</MenuItem>
            <MenuItem value="option3">Pending</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Date"
            placeholder="Enter Test Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserRound />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Remarks"
            placeholder="Enter Test Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserRound />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: "20px" }} />
      <AddPurchaseProductTable />
      <Stack className="section-top-margin" alignItems="end">
        {
          <LoadingButtonComponent
            loading={true}
            text={"Save"}
            icon={<Save />}
          />
        }
      </Stack>
    </Box>
  );
};

export default AddPurchase;
