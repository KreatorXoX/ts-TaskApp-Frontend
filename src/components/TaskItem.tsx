import { Box } from "@mui/material";
import TaskBody from "./TaskBody";
import TaskFooter from "./TaskFooter";
import dayjs from "dayjs";
import { getBorderColor } from "../utils/getColor";
import TaskHeader from "./TaskHeader";
import { ITask } from "../interfaces/ITask";
import { Status } from "./createTask/enums/Status";
import { Priority } from "./createTask/enums/Priority";
import TaskPriority from "./TaskPriority";

const TaskItem = ({
  title = "Test Title",
  dateLabel = new Date(),
  description = "Test description body",
  priority = Priority.normal,
  status = Status.inProgress,
  onClick = (e) => console.log(e),
  onStatusChange = (e) => console.log(e),
}: ITask) => {
  return (
    <Box
      p={2}
      mb={4}
      sx={{
        display: "grid",
        width: "100%",
        maxWidth: "50rem",
        backgroundColor: "background.paper",
        border: "1px solid",
        borderRadius: "1rem",
        borderColor: getBorderColor(status),
        position: "relative",
      }}
    >
      <TaskPriority priority={priority} />
      <TaskHeader title={title} dateLabel={dateLabel} />
      <TaskBody description={description} />
      <TaskFooter
        checked={status === Status.completed}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

export default TaskItem;
