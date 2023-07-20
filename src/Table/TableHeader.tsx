import React from "react";
import { TableHead, TableRow, TableSortLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { grey } from "@mui/material/colors";
import { columns } from "./Table";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[400],
  },
}));

const TableHeader = ({
  valueToOrderBy,
  orderDirection,
  handleRequestSort,
}: any) => {
  const createSortHandler = (property: any) => (event: any) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <StyledTableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth, borderLeft: "1px solid black" }}
          >
            <TableSortLabel
              active={valueToOrderBy === column.id}
              direction={valueToOrderBy === column.id ? orderDirection : "asc"} // or desc
              onClick={createSortHandler(column.id)} //createSortHandler('name') column.id
            >
              {column.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
