import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TableHeader } from './index'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';


interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    return { name, code, population, size };
}

export const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }
}));


export interface Column {
    id: 'name' | 'code' | 'population' | 'size';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

export const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
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

const getComparator = (order: any, orderBy: any) => {
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


const EmployeesTable = () => {
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
                        {sortedRowInformation(rows, getComparator(orderDirection, valueToOrderBy))
                            .map((row: any, index: any) => ( // dont use index
                                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} style={{ borderLeft: '1px solid black' }}>
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



