import { Box, Button, FilledInput, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async (values, actions) => {
    try {
      console.log(values);
      const {username, email, password} = values;
      const response = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/api/register`, values);
      if (response.status== 200) {
        // console.log("Successfully registered");
        Swal.fire({
          icon: "success",
          title: "Great!!!",
          text: `Successfully registered!`,
        });
        navigate('/login');
      } 
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Ops!!!",
        text: `Error: ${err?.response?.data?.message || err.message}`,
      });
    }
  };

  const registerFormValidationSchema = Yup.object().shape({
    username: Yup.string().min(2, "Username should have at least 2 letters or more").required("Username is required"),
    email: Yup.string().email("Enter valid email").required("Email is required"),
    password: Yup.string().min(5, "Password must have at least 5 characters").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Confirm you password")
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleMouseDownConfirmPassword = (e) => {
    e.preventDefault();
  };


  return (
    <Box sx={{width: '100%'}}>
      <Paper sx={{ marginX: "20px", paddingX: "20px", paddingY: "40px" }}>
        <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit}
          validationSchema={registerFormValidationSchema}
        >
          {({errors, touched}) => (
            <Form>
              <Field
                as={TextField}
                name="username"
                id="username"
                variant="filled"
                label="Name"
                sx={{ width: "100%", marginBottom: "30px" }}
                helperText={touched.username && errors.username && <span className="text-red-700">{errors.username}</span>}
                />
              <Field
                as={TextField}
                name="email"
                type="email"
                id="email"
                variant="filled"
                label="email"
                sx={{ width: "100%", marginBottom: "30px" }}
                helperText={touched.email && errors.email && <span className="text-red-700">{errors.email}</span>}
              />
              <Field
                as={FormControl}
                sx={{ width: "100%", marginBottom: "30px" }}
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  />
                  {touched.password && errors.password && 
                  <FormHelperText className="!text-red-700">{errors.password}</FormHelperText>}
              </Field>
              <Field
                as={FormControl}
                sx={{ width: "100%", marginBottom: "30px" }}
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-password">
                  Confirm Password
                </InputLabel>
                <FilledInput
                  name="confirmPassword"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  />
                  {touched.confirmPassword && errors.confirmPassword && 
                  <FormHelperText className="!text-red-700">{errors.confirmPassword}</FormHelperText>}
              </Field>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" sx={{marginTop: '20px'}} size="lg">
                  Register now!
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
