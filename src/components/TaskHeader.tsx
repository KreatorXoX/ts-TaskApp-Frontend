import { Box, Chip, Typography } from "@mui/material";
import { ITaskHeader } from "../interfaces/ITaskHeader";
import dayjs from "dayjs";

const TaskHeader = ({
  dateLabel = new Date(),
  title = "Test",
}: ITaskHeader) => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={dayjs(dateLabel).format("DD MMM, YYYY")}
        />
      </Box>
    </Box>
  );
};

export default TaskHeader;
