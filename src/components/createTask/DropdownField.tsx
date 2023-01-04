import { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  SelectChangeEvent,
  Select,
} from "@mui/material";
import { IDropdownField } from "../../interfaces/IDropdownField";

const DropdownField = ({
  onChange = (e) => console.log(e.target.value, e.target.name),
  values = [
    { label: "label 1", value: "value 1" },
    { label: "label 2", value: "value 2" },
  ],
  defaultText = "default text",
  label = "test label",
  inputId = "testId",

  disabled = false,
}: IDropdownField) => {
  const [selected, setSelected] = useState("");

  const handleSelectChange = (e: SelectChangeEvent) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  };
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${label}-id`}>{label}</InputLabel>
      <Select
        labelId={`${label}-id`}
        id={`${inputId}-id`}
        name={inputId}
        value={selected}
        label={label}
        onChange={handleSelectChange}
        disabled={disabled}
      >
        <MenuItem value="">
          <em>{defaultText}</em>
        </MenuItem>
        {values?.map((item) => (
          <MenuItem key={item.label} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownField;
