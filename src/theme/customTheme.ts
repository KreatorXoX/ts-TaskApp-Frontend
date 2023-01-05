import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "rgba(168,85,247,.80)",
      main: "rgba(168,85,247,.60)",
      dark: "rgba(168,85,247,.30)",
    },
    secondary: {
      light: "rgba(31, 81, 200, 0.8)",
      main: "rgba(31, 81, 200, 0.6)",
      dark: "rgba(31, 81, 200, 0.4)",
    },
    background: {
      paper: "#151515",
      default: "rgba(0,0,0,.9)",
    },
  },
});
