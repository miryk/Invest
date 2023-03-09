import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container maxWidth="md">
      <div className="container mx-auto my-8 bg-slate-300 rounded-lg px-24 py-8">
        <Box margin={3}>
          <Typography variant="h3" component="h3" className="text-center">
            Login
          </Typography>
        </Box>
        <Box sx={{ paddingX: 3 }}>
          <LoginForm />
        </Box>
        <div className="text-center mt-4 text-amber-900">
          <Link to="/register">Dont have a account yet? go to Register</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
