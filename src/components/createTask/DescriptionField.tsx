import { TextField } from "@mui/material";
import { ITextField } from "../../interfaces/ITextField";

// we are assigning default behavior to our interface fields
const DescriptionField = ({
  onChange = (e) => console.log(e.target.value),
  disabled = false,
}: ITextField) => {
  return (
    <TextField
      id="description"
      label="Description"
      multiline
      minRows={3}
      size="small"
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default DescriptionField;
