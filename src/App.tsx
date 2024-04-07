import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "@/pages/navbar";
import Dashboard from "@/pages/dashbord";

function App() {
  const theme = useMemo(() => {
    return createTheme(themeSettings);
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width={"100%"} height={"100%"} padding={"1rem 2rem 4rem 2rem"}>
          <NavBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/predictions" element={<div>Predictions Page</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
