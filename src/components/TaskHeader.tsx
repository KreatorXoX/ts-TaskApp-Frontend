import { Box, Chip, Typography, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { ITaskHeader } from "../interfaces/ITaskHeader";
import { useDeleteTask } from "../api/taskApi";
import dayjs from "dayjs";

const TaskHeader = ({
  dateLabel = new Date(),
  title = "Test",
  id,
}: ITaskHeader) => {
  const { mutate: deleteTask } = useDeleteTask();
  const deleteTaskHandler = (id: string) => {
    deleteTask({ id });
  };
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box display={"flex"} gap="0.1rem">
        <Box>
          <Chip
            variant="outlined"
            label={dayjs(dateLabel).format("DD MMM, YYYY")}
          />
        </Box>
        <Box>
          <IconButton onClick={deleteTaskHandler.bind(null, id)}>
            <Delete fontSize="small" color="error" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskHeader;
