import React from "react";
import RegisterForm from "../components/RegisterForm";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container maxWidth="md">
      <div className="container mx-auto my-8 bg-slate-300 rounded-lg p-8">
        <Box margin={3}>
          <Typography variant="h3" component="h3" className="text-center">
            Create an account
          </Typography>
        </Box>
        <Box sx={{ paddingX: 3 }}>
          <RegisterForm />
        </Box>
        <div className="text-center text-lime-800 mt-2">
          <Link className="text-center" to="/login">
            Already have a an account? Login here!
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Register;
