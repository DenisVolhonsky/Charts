import React from 'react';
import { PieChart, BarChart, FieldSet } from './Charts'
import { EmployeesTable } from './Table'
import Button from '@mui/material/Button'
import './App.css'
import { Box, Container, Typography } from '@mui/material'

function App() {
  return (
    <Container>
      <Typography variant='h5' className='PageName'>Corporate Employees</Typography>
      <Box className='BtnWrapper'>
        <Button 
          variant="outlined"
          sx={{ boxShadow: 6 }}
          style={{textTransform: 'none'}}
        >Add Employee</Button>
      </Box>
      <EmployeesTable />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',
      }}>
        <FieldSet text='Employees by Job Title'>
          <PieChart />
        </FieldSet>
        <FieldSet text='Employees by Gender'>
          <BarChart />
        </FieldSet>
      </Box>
    </Container>
  );
}

export default App;
