import { TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IDateField } from "../../interfaces/IDateField";

const DatePickerField = ({
  value = new Date(),
  onChange = (date: Date | null) => console.log(date),
  disabled = false,
}: IDateField) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Pick a Date"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;
