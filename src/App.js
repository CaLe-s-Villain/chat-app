import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Chat from "./features/chat/Chat";

const themeInitialState = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#292929", // Use `default` instead of `main`
      paper: "#292929",
    },
    primary: {
      main: "#76B900",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#616161",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={themeInitialState}>
      <CssBaseline />
      <Chat />
    </ThemeProvider>
  );
}
