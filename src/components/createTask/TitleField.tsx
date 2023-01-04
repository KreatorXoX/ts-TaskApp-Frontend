import { TextField } from "@mui/material";
import { ITextField } from "../../interfaces/ITextField";

const DescriptionField = ({
  onChange = (e) => console.log(e.target.value),
  disabled = false,
}: ITextField) => {
  return (
    <TextField
      id="title"
      label="Task Title"
      size="small"
      onChange={onChange}
      disabled={disabled}
      autoFocus
    />
  );
};

export default DescriptionField;
