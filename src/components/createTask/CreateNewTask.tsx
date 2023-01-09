import {
  Box,
  Typography,
  Stack,
  Button,
  LinearProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import DatePickerField from "./DatePickerField";
import DropdownField from "./DropdownField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";
import { useState } from "react";
import { useCreateTask } from "../../api/taskRequests";

const CreateNewTask = () => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);

  const { mutate } = useCreateTask();
  const submitTaskHandler = () => {
    if (!title || !description) {
      console.log("Title and Description is required fields");
    }
    mutate({
      title: title!,
      description: description!,
      date: date!.toISOString(),
      status,
      priority,
    });
    // mutate({ title, description, date, status, priority });
    console.log({ title, description, date, status, priority });
  };
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"flex-start"}
      px={4}
      my={6}
      width="100%"
    >
      <Typography variant="h6" component={"h2"} mb={2}>
        Create new Task
      </Typography>
      <Alert severity="success" sx={{ width: "100%", marginBottom: "1.2rem" }}>
        <AlertTitle>Success</AlertTitle>
        Your task is created succesfully
      </Alert>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TitleField onChange={(e) => setTitle(e.target.value)} />
        <DescriptionField onChange={(e) => setDescription(e.target.value)} />
        <DatePickerField value={date} onChange={(date) => setDate(date)} />
        <Stack direction={"row"} spacing={2}>
          <DropdownField
            label="Status"
            defaultText="Select Task Status"
            inputId="statusInput"
            value={status}
            values={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
            onChange={(e) => setStatus(e.target.value)}
          />
          <DropdownField
            label="Priority"
            defaultText="Select Task Priority"
            inputId="priorityInput"
            value={priority}
            values={[
              { value: Priority.low, label: Priority.low.toUpperCase() },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
            ]}
            onChange={(e) => setPriority(e.target.value)}
          />
        </Stack>
        <LinearProgress />
        <Button variant="contained" color="success" onClick={submitTaskHandler}>
          Create Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateNewTask;
