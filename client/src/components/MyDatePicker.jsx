import dayjs from "dayjs";
import { DateField, DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en-gb';
import { useField } from "formik";
import React from "react";

const MyDatePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  console.log(value)
  const { setValue } = helpers;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        {...field}
        valueType="date"
        // selected={value}
        // onChange={(date) => setValue(JSON.stringify(date))}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
