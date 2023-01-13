import { Box } from "@mui/material";
import TaskBody from "./TaskBody";
import TaskFooter from "./TaskFooter";
import { getBorderColor } from "../utils/getColor";
import TaskHeader from "./TaskHeader";
import { ITaskItem } from "../interfaces/ITaskItem";
import { Status } from "./createTask/enums/Status";
import { Priority } from "./createTask/enums/Priority";
import TaskPriority from "./TaskPriority";

const TaskItem = ({
  id,
  title = "Test Title",
  dateLabel = new Date(),
  description = "Test description body",
  priority = Priority.normal,
  status = Status.inProgress,
  onClick = (e) => console.log(e),
  onStatusChange = (e) => console.log(e.target.id, e.target.checked),
}: ITaskItem) => {
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
      <TaskHeader id={id} title={title} dateLabel={dateLabel} />
      <TaskBody description={description} />
      <TaskFooter
        id={id}
        status={status}
        checked={status === Status.completed || status === Status.inProgress}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

export default TaskItem;
