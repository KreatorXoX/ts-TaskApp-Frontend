import {
  Box,
  Typography,
  Stack,
  Button,
  LinearProgress,
  Alert,
  AlertTitle,
} from "@mui/material";

import DatePickerField from "./DatePickerField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";
import { FormEvent, useState } from "react";

import { useForm } from "../../hooks/form-hook";
import FormInputs from "../../shared/FormInput";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../utils/validators";

import { useCreateTask } from "../../api/taskApi";

const CustomForm = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const createTask = useCreateTask();

  const { formState, inputHandler, dropdownHandler } = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
      status: { value: Status.todo, isValid: false },
      priority: { value: Priority.normal, isValid: false },
    },
    false
  );

  const formHandler = (e: FormEvent) => {
    e.preventDefault();

    createTask.mutate({
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      status: formState.inputs.status.value,
      priority: formState.inputs.priority.value,
      date: date?.toISOString()!,
    });
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
      <form style={{ width: "100%" }}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <FormInputs
            type="text"
            id="title"
            name="title"
            label="title"
            value={formState.inputs.title.value}
            onInputChange={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(3)]}
            errorText="Field is required - Min 3 character"
          />
          <FormInputs
            type="textarea"
            id="description"
            name="description"
            label="Description"
            value={formState.inputs.title.value}
            onInputChange={inputHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
            errorText="Field is required - Min 10 character"
          />

          <DatePickerField value={date} onChange={(date) => setDate(date)} />
          <Stack direction={"row"} spacing={2}>
            <FormInputs
              type="select"
              id="status"
              name="status"
              label="Status"
              initialValue={formState.inputs.status.value}
              initialValid={true}
              onInputChange={dropdownHandler}
              defaultText="Pick a Status"
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
              errorText="Field is required"
              validators={[VALIDATOR_REQUIRE()]}
            />

            <FormInputs
              type="select"
              id="priority"
              name="priority"
              label="Priority"
              initialValue={formState.inputs.priority.value}
              initialValid={true}
              onInputChange={dropdownHandler}
              defaultText="Pick a Priority"
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
              errorText="Field is required"
              validators={[VALIDATOR_REQUIRE()]}
            />
          </Stack>
          <LinearProgress />
          <Button
            variant="contained"
            disabled={!formState.isValid}
            onClick={formHandler}
            color="success"
          >
            Create Task
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CustomForm;
