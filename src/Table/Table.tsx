import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TableHeader } from './index'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import uuid from 'react-uuid';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'jobTitle', label: 'Job Title', minWidth: 100 },
    {
        id: 'tenure',
        label: 'Tenure',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'gender',
        label: 'Gender',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];

const descendingComparator = (a: any, b: any, orderBy: any) => {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

const getComparator = (order: string, orderBy: any) => {
    return order === 'desc'
        ? (a: any, b: any) => descendingComparator(a, b, order)
        : (a: any, b: any) => -descendingComparator(a, b, orderBy)
}

const sortedRowInformation = (rowArray: any, comparator: any) => {
    const stabilazedRowArray = rowArray.map((el: any, index: number) => [el, index])
    stabilazedRowArray.sort((a: any, b: any) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilazedRowArray.map((el: any) => el[0])
}


const EmployeesTable = ({data}: any) => {
    const [orderDirection, setOrderDirection] = useState('asc')
    const [valueToOrderBy, setValueToOrderBy] = useState('name')

    const handleRequestSort = (event: any, property: any) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'desc' : 'asc')
    }

    return (
        <Container>
            <TableContainer sx={{ maxHeight: 440 }} style={{ border: '1px solid black' }}>
                <Table stickyHeader aria-label="sticky table" >
                    <TableHeader
                        valueToOrderBy={valueToOrderBy}
                        orderDirection={orderDirection}
                        handleRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {sortedRowInformation(data, getComparator(orderDirection, valueToOrderBy))
                            .map((row: any) => (
                                <StyledTableRow hover role="checkbox" tabIndex={-1} key={uuid()}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={uuid()} align={column.align} style={{ borderLeft: '1px solid black' }}>
                                                {column.format && typeof value === 'number'
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
}

export default EmployeesTable;



