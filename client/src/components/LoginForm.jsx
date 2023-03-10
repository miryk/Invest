import {
  Box,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    console.log(values);
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email is required to log in"),
    password: Yup.string().min(5, "Password have at least 5 characters").required("Password is required to login")
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ marginX: "auto" }}>
      <Paper sx={{ marginX: "20px", paddingX: "20px", paddingY: "40px" }}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="email"
                type="email"
                id="email"
                variant="filled"
                label="email"
                sx={{ width: "100%", marginBottom: "30px" }}
                helperText={
                  touched.email &&
                  errors.email && (
                    <span className="text-red-700">{errors.email}</span>
                  )
                }
              />
              {/* <Field
                as={TextField}
                name="password"
                id="password"
                label="Password"
                variant="filled"
                type="password"
                sx={{ width: "100%", marginBottom: "30px" }}
                helperText={
                  touched.password &&
                  errors.password && (
                    <span className="text-red-700">{errors.password}</span>
                  )
                }
              /> */}
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" size="lg">
                  Go to Dashboard
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default LoginForm;