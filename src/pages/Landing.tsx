import Grid from "@mui/material/Grid";
import TaskArea from "../components/TaskArea";
import SideBar from "../components/sidebar";

const Landing = () => {
  return (
    <Grid container minHeight="100vh">
      <TaskArea />
      <SideBar />
    </Grid>
  );
};

export default Landing;
