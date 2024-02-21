import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import theme from "./pages/theme";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
