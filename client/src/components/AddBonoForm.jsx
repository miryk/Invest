import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { NumericFormat } from "react-number-format";

const AddBonoForm = () => {
  const [paymentTimes, setPaymentTimes] = useState(5);
  const [assetType, setAssetType] = useState("Bono");

  const initialValues = {
    issuingEntity: "",
    financialAsset: "Bono",
    capitalInvested: 0,
    series: "",
    term: 0,
    nominalRate: 0,
    operationDate: "",
    payments: [],
  };

  const bonoValidationSchema = Yup.object().shape({
    issuingEntity: Yup.string().required(
      "A issuing Company or Entity is required"
    ),
  });

  const handleSubmit = (values, actions) => {
    console.log(values, "form values");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container maxWidth="md">
      <Formik
        initialValues={initialValues}
        validationSchema={bonoValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="issuingEntity"
              type="text"
              variant="standard"
              label="Issuing Entity"
              sx={{ width: "100%", marginBottom: "20px" }}
              helperText={
                touched.issuingEntity &&
                errors.issuingEntity && (
                  <span className="text-red-700">{errors.issuingEntity}</span>
                )
              }
            />
            <div className="my-2 py-2">
              <Field as={FormControl} disabled>
                <InputLabel id="financialAsset">Asset Type</InputLabel>
                <Select
                  name="financialAsset"
                  id="financialAsset"
                  labelId="financialAsset"
                  value={assetType}
                  label="Financial Asset"
                  onChange={handleChange}
                  sx={{ width: "350px"}}
                >
                  <MenuItem value={"Bono"}>Bono</MenuItem>
                </Select>
              </Field>
            </div>
            <div className="my-2 py-2">
              <Field as={FormControl} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Capital invested
                </InputLabel>
                <NumericFormat
                  customInput={FormControl}
                  decimalSeparator=","
                  thousandSeparator="."
                  name="capitalInvested"
                  decimalScale={0}
                >
                  <InputLabel htmlFor="standard-adornment-amount">
                    Capital invested
                  </InputLabel>
                  <Input
                    name="capitalInvested"
                    id="standard-adornment-amount"
                    endAdornment={
                      <InputAdornment position="start">Gs</InputAdornment>
                    }
                  />
                </NumericFormat>
              </Field>

            </div>
            <Box>
              <Button type="submit">Register new asset</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddBonoForm;
