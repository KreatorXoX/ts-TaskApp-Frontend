import {
  Box,
  CircularProgress,
  Grid,
  Alert,
  LinearProgress,
} from "@mui/material";
import dayjs from "dayjs";
import TaskCounter from "./TaskCounter";
import { Status } from "./createTask/enums/Status";
import TaskItem from "./TaskItem";
import { useGetTasks } from "../api/taskApi";

const TaskArea = () => {
  const {
    data: Tasks,
    isSuccess,
    isLoading,
    isError,
    isFetching,
  } = useGetTasks();

  return (
    <Grid item md={8} px={3}>
      <Box mb={8} pt={4}>
        Status of Your Tasks as of
        {dayjs(Date.now()).format(" dddd, D MMM YYYY")}
      </Box>
      {(isLoading || isFetching) && (
        <Box display={"flex"} justifyContent="center">
          <CircularProgress color="info" size="7rem" />
        </Box>
      )}
      {isError && (
        <Box display={"flex"} justifyContent="center">
          <Alert severity="error">Error in Fetching Data!</Alert>
        </Box>
      )}
      {isSuccess && Tasks.length < 1 && (
        <Box display={"flex"} justifyContent="center">
          <Alert severity="warning">
            You Have No Tasks! You can create one!
          </Alert>
        </Box>
      )}
      {isSuccess && Tasks.length > 0 && (
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
              <TaskCounter
                color="#D22730"
                label={Status.todo}
                value={Tasks.filter((task) => task.status === "todo").length}
              />
              <TaskCounter
                color="#FFAD00"
                label={Status.inProgress}
                value={
                  Tasks.filter((task) => task.status === "inProgress").length
                }
              />
              <TaskCounter
                color="#44D62C"
                label={Status.completed}
                value={
                  Tasks.filter((task) => task.status === "completed").length
                }
              />
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
                  id={task.id}
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
