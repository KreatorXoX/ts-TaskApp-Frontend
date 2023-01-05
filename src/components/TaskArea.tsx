import { Box, Grid } from "@mui/material";
import dayjs from "dayjs";
import TaskCounter from "./TaskCounter";
import { Status } from "./createTask/enums/Status";
import TaskItem from "./TaskItem";

const TaskArea = () => {
  return (
    <Grid item md={8} px={3}>
      <Box mb={8} pt={4}>
        Status of Your Tasks as of
        {dayjs(Date.now()).format(" dddd, D MMM YYYY")}
      </Box>
      <Grid container justifyContent="center" px={8}>
        <Grid
          item
          display={"flex"}
          justifyContent="space-around"
          alignItems={"center"}
          xs={12}
          mb={10}
          sx={{ maxWidth: "50rem !important" }}
        >
          <TaskCounter color="#D22730" label={Status.todo} value={1} />
          <TaskCounter color="#FFAD00" label={Status.inProgress} value={1} />
          <TaskCounter color="#44D62C" label={Status.completed} value={1} />
        </Grid>
        <Grid
          item
          display={"flex"}
          flexDirection="column"
          justifyContent="space-around"
          alignItems={"center"}
          md={10}
          sm={12}
        >
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
