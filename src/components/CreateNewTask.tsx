import React from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";

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
        <TextField id="title" label="Task Title" size="small" autoFocus />
        <TextField
          id="description"
          label="Description"
          multiline
          minRows={3}
          size="small"
        />
      </Stack>
    </Box>
  );
};

export default CreateNewTask;
