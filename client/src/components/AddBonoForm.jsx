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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PaymentRow from "./PaymentRow";

const AddBonoForm = () => {
  const [paymentTimes, setPaymentTimes] = useState(5);
  const [assetType, setAssetType] = useState("Bono");

  const handleTimes = () => {
    setPaymentTimes(paymentTimes+1);
    console.log(paymentTimes+1)
    console.log(initialValues.payments)
  }

  let initialValues = {
    issuingEntity: "",
    financialAsset: "Bono",
    capitalInvested: 0,
    series: "",
    term: 0,
    nominalRate: 0,
    operationDate: "",
    payments: Array(paymentTimes+1).fill({date:"", value:""})
    // payments: [{date:"", value:""},{date:"", value:""},{date:"", value:""},{date:"", value:""},{date:"", value:""}, {date:"", value: ""}]
  };

  console.log(initialValues)

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
              sx={{ width: "60%", marginBottom: "20px" }}
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
                  sx={{ width: "350px" }}
                >
                  <MenuItem value={"Bono"}>Bono</MenuItem>
                </Select>
              </Field>
            </div>
            <div className="my-2 py-2">
              <Field
                as={FormControl}
                variant="standard"
                sx={{ width: "60%", marginBottom: "20px" }}
              >
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
                  <InputLabel htmlFor="capitalInvested">
                    Capital invested
                  </InputLabel>
                  <Input
                    name="capitalInvested"
                    id="capitalInvested"
                    endAdornment={
                      <InputAdornment position="start">Gs</InputAdornment>
                    }
                  />
                </NumericFormat>
              </Field>
            </div>
            <div className="my-2 py-2">
              <Field
                as={FormControl}
                variant="standard"
                sx={{ width: "60%", marginBottom: "20px" }}
              >
                <InputLabel htmlFor="term">Term</InputLabel>
                <Input name="term" id="term" type="number" />
              </Field>
            </div>
            <div className="my-2 py-2">
              <Field
                as={FormControl}
                variant="standard"
                sx={{ width: "60%", marginBottom: "20px" }}
              >
                <InputLabel>Nominal Rate</InputLabel>
                <Input
                  id="nominalRate"
                  name="nominalRate"
                  type="number"
                  endAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                />
              </Field>
              </div>
              <div className="my-2 py-2">
                <Field dateAdapter={AdapterDayjs} name="operationDate">
                  {({ field, form, meta }) => (
                    <div className="flex flex-row items-center gap-4">
                      <InputLabel>Operation Date:</InputLabel>
                      <Input {...field} type="date" id="operationDate" />
                    </div>
                  )}
                </Field>
              </div>
              <div className="my-2 py-2">
                <Field
                  as={TextField}
                  name="series"
                  label="Bond Series"
                  type="search"
                  variant="standard"
                ></Field>
              </div>
              <div className="my-2 py-2">
                <InputLabel>Payments: </InputLabel>
                <PaymentRow rows={paymentTimes}/>
                {/* <ol type="1">
                  <li>
                    <div className="flex flex-row items-center gap-4">
                    <Field name="payments[0].date" dateAdapter={AdapterDayjs}>
                      {({ field, form, meta }) => (
                        <>
                        <InputLabel>Pay date</InputLabel>
                        <Input {...field} type="date" id='payments[0].date' sx={{padding: '5px'}}/>
                        </>
                      )}
                    </Field>
                    <Field  name="payments[0].value">
                    {({ field, form, meta }) => (
                        // <Input {...field} type="number"></Input>
                        <NumericFormat
                        customInput={FormControl}
                        decimalSeparator=","
                        thousandSeparator="."
                        decimalScale={0}
                        allowNegative={false}
                        {...field}
                      >
                        <InputLabel htmlFor="capitalInvested">
                          Payment value
                        </InputLabel>
                        <Input
                          // name="capitalInvested"
                          id="cpayments[0].value"
                          name="payments[0].value"
                          endAdornment={
                            <InputAdornment position="start">Gs</InputAdornment>
                          }
                        />
                      </NumericFormat>
                      )}
                    </Field> 
                    </div>
                  </li>
                </ol> */}
                <button onClick={handleTimes} type='button'>Add payment</button>
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
