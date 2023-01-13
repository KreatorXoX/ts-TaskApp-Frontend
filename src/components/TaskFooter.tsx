import { Box, Button, Switch, FormControlLabel } from "@mui/material";
import { ITaskFooter } from "../interfaces/ITaskFooter";
import { Status } from "./createTask/enums/Status";
import { useUpdateTask } from "../api/taskApi";

const TaskFooter = ({
  id = "1",
  status = Status.todo,
  checked = false,
  onClick = (e) => {
    console.log("Completed");
  },
  onStatusChange = (e) => {
    console.log(e.target.checked);
  },
}: ITaskFooter) => {
  const { mutate: updateTask, isLoading, isSuccess } = useUpdateTask();
  const { mutate: completeTask } = useUpdateTask();
  const statusChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      id: e.target.id,
      status: e.target.checked ? "inProgress" : "todo",
    };
    updateTask(data);
  };
  const completeTaskHandler = () => {
    completeTask({ id, status: "completed" });
  };
  return (
    <Box display="flex" justifyContent="space-between">
      <FormControlLabel
        control={
          <Switch
            id={id}
            name="status"
            checked={checked}
            onChange={statusChangeHandler}
            color={status === "completed" ? "success" : "warning"}
            size="small"
            disabled={status === "completed"}
          />
        }
        label={`${status}`}
      />

      <Box>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={completeTaskHandler}
          sx={{ color: "white" }}
          disabled={status === "completed"}
        >
          Mark Complete
        </Button>
      </Box>
    </Box>
  );
};

export default TaskFooter;
