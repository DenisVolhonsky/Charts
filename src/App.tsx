import React, { useEffect, useState } from "react";
import { PieChart, BarChart, FieldSet } from "./Charts";
import { EmployeesTable } from "./Table";
import Button from "@mui/material/Button";
import "./App.css";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import { getData, postData } from "./api.js";
import { mappedChartData } from "./helpers";
import AddEmployeeModal from "./Modal";

export interface Data {
  id?: number;
  name: string;
  jobTitle: string;
  tenure: string | number;
  gender: string;
}

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Typography data-testid="company-name" variant="h5" className="PageName">
        Corporate Employees
      </Typography>
      <Box className="BtnWrapper">
        <Button
          data-testid="button"
          variant="outlined"
          sx={{ boxShadow: 6 }}
          style={{ textTransform: "none" }}
          onClick={handleOpen}
        >
          Add Employee
        </Button>
        <AddEmployeeModal
          open={open}
          handleClose={handleClose}
          fetchData={fetchData}
          postData={postData}
        />
      </Box>
      {!data.length ? (
        <LinearProgress />
      ) : (
        <>
          <EmployeesTable data-testid="employees-table" data={data} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
            }}
          >
            <FieldSet text="Employees by Job Title">
              <PieChart
                data-testid="pieChart"
                mappedData={mappedChartData(data, "jobTitle")}
              />
            </FieldSet>
            <FieldSet text="Employees by Gender">
              <BarChart
                data-testid="barChart"
                mappedData={mappedChartData(data, "gender")}
              />
            </FieldSet>
          </Box>
        </>
      )}
    </Container>
  );
}

export default App;
