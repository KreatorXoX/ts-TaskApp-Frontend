import { Box } from "@mui/material";
import { ITaskPriority } from "../interfaces/ITaskPriority";
import { Priority } from "./createTask/enums/Priority";
import { getPriorityColor, getLabelColor } from "../utils/getColor";

const TaskPriority = ({ priority = Priority.normal }: ITaskPriority) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "-1.2rem",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        backgroundColor: getPriorityColor(priority),
        boxShadow: `0px 0px 20px 1px ${getLabelColor(priority)}`,
      }}
    />
  );
};

export default TaskPriority;
