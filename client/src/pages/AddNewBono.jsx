import { Container, Typography } from "@mui/material";
import React from "react";
import AddBonoForm from "../components/AddBonoForm";

const AddNewBono = () => {
  return (
    <Container maxWidth="lg" sx={{marginTop: '20px'}}>
      <Typography variant='h4' component='h3' className="text-center">New Bonds</Typography>
      <AddBonoForm />
    </Container>
  );
};

export default AddNewBono;
