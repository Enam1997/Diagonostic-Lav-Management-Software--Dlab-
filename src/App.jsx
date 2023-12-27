import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrolabelContainer from "./layout/scrollabel-container/ScrolabelContainer";
import Sidebar from "./layout/sidebar/Sidebar";
import Topbar from "./layout/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePatient from "./pages/patient-details/create-patient/CreatePatient";
import PatientList from "./pages/patient-details/patient-list/PatientList";
import Category from "./pages/patient-details/category/Category";
import LoginDeactive from "./pages/patient-details/login-deactive/LoginDeactive";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8addc1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="main">
        <Sidebar />
        <div className="right-container">
          <Topbar />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patient/create" element={<CreatePatient />} />
              <Route path="/patient/view" element={<PatientList />} />
              <Route path="/patient/category" element={<Category />} />
              <Route
                path="/patient/disable_authentication"
                element={<LoginDeactive />}
              />
            </Routes>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
export default App;
