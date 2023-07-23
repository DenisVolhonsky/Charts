// @ts-nocheck
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { TableHeader } from "./index";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import { nanoid } from "nanoid";
import { getComparator, sortedRowInformation } from "../helpers";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "jobTitle", label: "Job Title", minWidth: 100 },
  {
    id: "tenure",
    label: "Tenure",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "gender",
    label: "Gender",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

const EmployeesTable = ({ data }) => {
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("name");

  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  return (
    <Container>
      <TableContainer
        sx={{ maxHeight: 440 }}
        style={{ border: "1px solid black" }}
      >
        <Table data-testid='table' stickyHeader aria-label="sticky table">
          <TableHeader
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedRowInformation(
              data,
              getComparator(orderDirection, valueToOrderBy)
            ).map((row) => (
              <StyledTableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={nanoid()}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      data-testid='user-item'
                      key={nanoid()}
                      align={column.align}
                      style={{ borderLeft: "1px solid black" }}
                    >
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EmployeesTable;
