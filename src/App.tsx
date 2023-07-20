import React, { useEffect, useState } from 'react';
import { PieChart, BarChart, FieldSet } from './Charts'
import { EmployeesTable } from './Table'
import Button from '@mui/material/Button'
import './App.css'
import { Box, Container, Typography } from '@mui/material'
import { getData, postData } from './api.js'
import { mappedChartData } from './helpers'
import uuid from 'react-uuid';

export interface Data {
  id?: number
  name: string;
  jobTitle: string;
  tenure: string | number;
  gender: string;
}

function App() {
  const [data, setData] = useState<any>([])

  const fetchData = async () => {
    const result = await getData()
    setData(result)
  }

  useEffect(() => { 
    fetchData()
  },[])

  console.log(mappedChartData(data, "gender"))
  console.log(mappedChartData(data, "jobTitle"))

  return (
    <Container>
      <Typography variant='h5' className='PageName'>Corporate Employees</Typography>
      <Box className='BtnWrapper'>
        <Button 
          variant="outlined"
          sx={{ boxShadow: 6 }}
          style={{textTransform: 'none'}}
          onClick={async () => {
            const result = await postData({
            id: uuid(),
            name: "Denys Volkhonsky",
            jobTitle: "developer",
            tenure: "5",
            gender: "Male"
          })
          result && fetchData()
        }}
        >Add Employee</Button>
      </Box>
      <EmployeesTable data={data}/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',
      }}>
        <FieldSet text='Employees by Job Title'>
          <PieChart mappedData={mappedChartData(data, "jobTitle")}/>
        </FieldSet>
        <FieldSet text='Employees by Gender'>
          <BarChart mappedData ={mappedChartData(data, "gender")}/>
        </FieldSet>
      </Box>
    </Container>
  );
}

export default App;
