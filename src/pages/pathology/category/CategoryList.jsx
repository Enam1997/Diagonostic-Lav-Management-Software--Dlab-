import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Stack } from "@mui/material";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileEdit, Trash2 } from "lucide-react";

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1, "Digital X-ray"),
  createData(2, "Dental"),
  createData(3, "Pathology"),
  createData(4, "Unique Ultrasonogram"),
  createData(5, "Bed"),
  createData(6, "Urine"),
  createData(7, "Blood"),
  createData(8, "CBC"),
  createData(9, "Endoscopy"),
  createData(10, "C T Scan"),
  createData(11, "HEART DISORDER"),
];

const CategoryList = () => {
  return (
    <Box className="card1 basic-deatils-form">
      <p className="title1"> Test List</p>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Stack direction={"row"}>
                    <Tooltip1 key={1} title={"Hello"}>
                      <IconButton>
                        <FileEdit />
                      </IconButton>
                    </Tooltip1>
                    <Tooltip1 key={1} title={"Hello"}>
                      <IconButton>
                        <Trash2 color="red" />
                      </IconButton>
                    </Tooltip1>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CategoryList;
