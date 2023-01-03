import { Avatar, Box, Typography } from "@mui/material";

interface IProfile {
  name?: string;
}
const Profile = ({ name }: IProfile) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
    >
      <Avatar
        sx={{
          width: "3em",
          height: "3em",
          backgroundColor: "primary.main",
          marginBottom: "1rem",
          fontSize: "2rem",
        }}
      >
        <Typography variant="h4" color="text.primary">
          {name?.substring(0, 1) || "A"}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, {name || "Anon"}!
      </Typography>
      <Typography variant="body1" color="text.primary">
        Lorem ipsum dolor sit amet consectetur
      </Typography>
    </Box>
  );
};

export default Profile;
