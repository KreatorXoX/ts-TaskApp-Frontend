import { Box, Typography, Stack } from "@mui/material";
import TitleField from "./TitleField";
import DescriptionField from "./DescriptionField";
import DatePickerField from "./DatePickerField";

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
      </Stack>
    </Box>
  );
};

export default CreateNewTask;
