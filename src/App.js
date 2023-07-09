import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ClientRoutes from "./components/Routes/ClientRoutes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/UI/theme";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <ClientRoutes data-testid="client-routes-component">
            <Layout data-testid="layout-component"></Layout>
          </ClientRoutes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
