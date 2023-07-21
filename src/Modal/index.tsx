import React from "react";
import {
  Box,
  Button,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import { Data } from "../App";
import { Formik, Form } from "formik";

interface Props {
  open: boolean;
  handleClose: () => void;
  fetchData: () => void;
  postData: (value: Data) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddEmployeeModal: React.FC<Props> = ({
  open,
  handleClose,
  fetchData,
  postData,
}: Props) => {

  const onSubmit = async (values: Data) => {
    const result: any = await postData(values);
    result && fetchData();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2" mb={5}>
          Add New Employee
        </Typography>
        <Formik
          initialValues={{ name: "", jobTitle: "", tenure: "", gender: "" }}
          onSubmit={(values) => onSubmit(values)}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
              <Input
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputLabel htmlFor="tenure">Tenure</InputLabel>
              <Input
                name="tenure"
                value={values.tenure}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Input
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "25px",
                }}
              >
                <Button type="submit">Save & Close</Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddEmployeeModal;
