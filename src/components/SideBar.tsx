import { Grid } from "@mui/material";
import { ReactElement } from "react";
import CreateNewTask from "./createTask/CreateNewTask";
import Profile from "./Profile";

const SideBar = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      px={4}
      sx={{
        height: "100vh",
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Profile />
      <CreateNewTask />
    </Grid>
  );
};

export default SideBar;
