import { Box, Typography, Stack } from "@mui/material";
import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import DatePickerField from "./DatePickerField";
import DropdownField from "./DropdownField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";

const CreateNewTask = () => {
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
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TitleField />
        <DescriptionField />
        <DatePickerField />
        <Stack direction={"row"} spacing={2}>
          <DropdownField
            label="Status"
            defaultText="Select Task Status"
            inputId="statusInput"
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
          />
          <DropdownField
            label="Priority"
            defaultText="Select Task Priority"
            inputId="priorityInput"
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
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateNewTask;
