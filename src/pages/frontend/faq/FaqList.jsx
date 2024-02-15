import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import rows from "../../../const-data/frontend/faqList";
import {  IconButton, Stack } from "@mui/material";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileEdit, Trash2 } from "lucide-react";

export default function FaqList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl</TableCell>
            <TableCell>Title</TableCell>
            <TableCell> Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sl}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
                <Stack direction={"row"} justifyContent={"end"}>
                  <Tooltip1 title={"Hello"}>
                    <IconButton>
                      <FileEdit />
                    </IconButton>
                  </Tooltip1>
                  <Tooltip1 title={"Hello"}>
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
  );
}
