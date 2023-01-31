import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TableFooter } from "@mui/material";
import { downloadData } from "./LogsTableHelpers";

function LogsTable(props) {
  const { logData } = props;

  return (
    <TableContainer sx={{ margin: "1rem 0" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Transaction ID</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Log Level</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Timestamp</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Details</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Error</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logData?.length ? (
            logData.map((row) => (
              <TableRow
                key={row.transactionId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.transactionId}
                </TableCell>
                <TableCell>{row.loglevel}</TableCell>
                <TableCell>
                  {new Date(row.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell>{row.err}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                <h3>No Logs found in uploaded file</h3>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {logData?.length ? (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  onClick={() => downloadData(logData)}
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        ) : null}
      </Table>
    </TableContainer>
  );
}

export default LogsTable;
