import { ThemeProvider, CssBaseline } from "@mui/material";
import Landing from "./pages/Landing";
import { customTheme } from "./theme/customTheme";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <Landing />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
