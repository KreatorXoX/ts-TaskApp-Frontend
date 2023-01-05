import { Box, Button, Switch, FormControlLabel } from "@mui/material";
import { ITaskFooter } from "../interfaces/ITaskFooter";

const TaskFooter = ({
  checked = false,
  onClick = (e) => {
    console.log("Completed");
    console.log(e);
  },
  onStatusChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.checked);
  },
}: ITaskFooter) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <FormControlLabel
        control={
          <Switch
            name="status"
            checked={checked}
            onChange={onStatusChange}
            color="warning"
            size="small"
          />
        }
        label={`${"Label"}`}
      />

      <Box>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={onClick}
          sx={{ color: "white" }}
        >
          Mark Complete
        </Button>
      </Box>
    </Box>
  );
};

export default TaskFooter;
