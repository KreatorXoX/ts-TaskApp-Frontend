import { Box, Typography } from "@mui/material";
import { ITaskBody } from "../interfaces/ITaskBody";

const TaskBody = ({ description }: ITaskBody) => {
  return (
    <Box mb={3}>
      <Typography component={"p"}>
        {description ||
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam porro consequatur molestias possimus eos quam iusto..."}
      </Typography>
    </Box>
  );
};

export default TaskBody;
