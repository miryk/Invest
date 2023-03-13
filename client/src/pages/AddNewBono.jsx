import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import AddBonoForm from "../components/AddBonoForm";

const AddNewBono = () => {
  return (
    <Paper sx={{margin: '30px', paddingY: '20px'}}>
      <Typography variant='h4' component='h3' className="text-center">New Bonds</Typography>
      <AddBonoForm />
    </Paper>
  );
};

export default AddNewBono;
