import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileEdit, Trash2 } from "lucide-react";

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1, "Litter"),
  createData(2, "Pak"),
  createData(3, "Kit"),
  createData(4, "Pice"),
  createData(5, "ml"),
];

const UnitList = () => {
  return (
    <Box className="card1 basic-deatils-form">
      <p className="title1"> Category List</p>

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
                <TableCell>
                  <Typography fontWeight={500} variant="body1">
                    {row.name}
                  </Typography>
                </TableCell>
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

export default UnitList;
