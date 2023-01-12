import { Box, CircularProgress, Grid } from "@mui/material";
import dayjs from "dayjs";
import TaskCounter from "./TaskCounter";
import { Status } from "./createTask/enums/Status";
import TaskItem from "./TaskItem";
import { useGetTasks } from "../api/taskApi";

const TaskArea = () => {
  const { data: Tasks, isSuccess, isLoading } = useGetTasks();

  return (
    <Grid item md={8} px={3}>
      <Box mb={8} pt={4}>
        Status of Your Tasks as of
        {dayjs(Date.now()).format(" dddd, D MMM YYYY")}
      </Box>
      {isLoading && (
        <Box display={"flex"} justifyContent="center">
          <CircularProgress color="info" size="7rem" />
        </Box>
      )}
      {isSuccess && (
        <>
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
              <TaskCounter
                color="#FFAD00"
                label={Status.inProgress}
                value={1}
              />
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
              {Tasks?.map((task) => (
                <TaskItem
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  priority={task.priority}
                  dateLabel={new Date(task.date)}
                />
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TaskArea;
