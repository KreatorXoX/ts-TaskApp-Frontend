import { Avatar, Box, Typography } from "@mui/material";
import { ITaskCounter } from "../interfaces/ITaskCounter";
import { Status } from "./createTask/enums/Status";

const TaskCounter = ({
  value = 0,
  color = "white",
  label = Status.todo,
}: ITaskCounter) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      gap="2rem"
    >
      <Avatar
        sx={{
          backgroundColor: "transparent",
          border: `6px ${color} solid`,
          padding: "3rem",
        }}
      >
        <Typography color="white" variant="h4" textAlign={"center"}>
          {value}
        </Typography>
      </Avatar>
      <Typography fontFamily={"apple"} variant="h6" textAlign={"center"}>
        {label.toUpperCase()}
      </Typography>
    </Box>
  );
};

export default TaskCounter;
