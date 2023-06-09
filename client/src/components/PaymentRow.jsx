import { Field } from "formik";
import React from "react";
import { NumericFormat } from "react-number-format";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";


const PaymentRow = ({rows}) => {

  let renderRows = [];
  for (let i=1; i<=rows; i++) {
    renderRows.push(        <li key={'row'+(i-1)} className="my-3">
      <div className="flex flex-row items-center gap-4">
        <Field name={`payments[${i-1}].date`} dateAdapter={AdapterDayjs}>
          {({ field, form, meta }) => (
            <>
              <InputLabel>Pay date</InputLabel>
              <Input
                {...field}
                type="date"
                id={`payments[${i-1}].date`}
                sx={{ padding: "5px" }}
                format="YYYY-MM-DD"
              />
            </>
          )}
        </Field>
        <Field name={`payments[${i-1}].value`}>
          {({ field, form, meta }) => (
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
                id={`payments[${i-1}].value`}
                name={`payments[${i-1}].value`}
                endAdornment={
                  <InputAdornment position="start">Gs</InputAdornment>
                }
              />
            </NumericFormat>
          )}
        </Field>
      </div>
    </li>)
  }
  return (
    <div>
      <ol type="1">
        {/* <li>
          <div className="flex flex-row items-center gap-4">
            <Field name="payments[0].date" dateAdapter={AdapterDayjs}>
              {({ field, form, meta }) => (
                <>
                  <InputLabel>Pay date</InputLabel>
                  <Input
                    {...field}
                    type="date"
                    id="payments[0].date"
                    sx={{ padding: "5px" }}
                  />
                </>
              )}
            </Field>
            <Field name="payments[0].value">
              {({ field, form, meta }) => (
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
        </li> */}
        {renderRows}
      </ol>
    </div>
  );
};

export default PaymentRow;
