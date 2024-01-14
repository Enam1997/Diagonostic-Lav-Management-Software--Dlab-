import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileEdit, Trash2 } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

function createData(chemical, unitPrice, quantity, discount) {
  return { chemical, unitPrice, quantity, discount };
}

const rows = [
  createData("sulpher", 2000, 5, 500),
  createData("sulpher", 2000, 5, 500),
];

const AddPurchaseProductTable = () => {
  const [purchaseProducts, setPurchaseProducts] = useState(rows);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    setTotalBill(getTotal(purchaseProducts));
  }, [purchaseProducts]);

  const getTotal = (rows) => {
    let total = 0;
    rows.map((element) => {
      total += element.unitPrice * element.quantity - element.discount;
    });
    return total;
  };

  const addRow = () => {
    setPurchaseProducts((prevProduct) => {
      return [...prevProduct, createData("", 0, 0, 0)];
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Chemical</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchaseProducts.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TextField
                  id="outlined-basic"
                  size="small"
                  select
                  variant="outlined"
                  fullWidth
                  value={row.chemical}
                  SelectProps={{
                    displayEmpty: true, // To show an empty option initially
                  }}
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="oxyzen">Oxyzen</MenuItem>
                  <MenuItem value="helium">Helium</MenuItem>
                  <MenuItem value="sulpher">Sulpher</MenuItem>
                </TextField>
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  className="custom-textfield"
                  autoFocus
                  value={row.unitPrice}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  className="custom-textfield"
                  autoFocus
                  value={row.quantity}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  className="custom-textfield"
                  value={row.discount}
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  className="custom-textfield"
                  value={row.unitPrice * row.quantity - row.discount}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack mt={2} direction="row" justifyContent="space-between">
        <Button variant="contained" onClick={addRow}>
          Add Row
        </Button>
        <Stack direction="row" alignItems={"center"}>
          <Typography mr={2}>Total: </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            fullWidth
            className="custom-textfield"
            value={totalBill}
          />
        </Stack>
      </Stack>
    </TableContainer>
  );
};

export default AddPurchaseProductTable;
