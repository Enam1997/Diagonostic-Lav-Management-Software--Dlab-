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
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import LabTest from "./pages/pathology/lab-test/LabTest";
import TestCategory from "./pages/pathology/category/TestCategory";
import Chemical from "./pages/inventory/chemical/Chemical";
import InventoryCategory from "./pages/inventory/inventory-category/InventoryCategory";
import Supplier from "./pages/inventory/supplier/Supplier";
import Unit from "./pages/inventory/unit/Unit";
import Purchase from "./pages/inventory/purchase/Purchase";
import Stock from "./pages/inventory/stock/Stock";
import ReagentAssigned from "./pages/inventory/reagent-assigned/ReagentAssigned";
import Schedule from "./pages/schedule/Schedule";
import AppoinmentList from "./pages/appoinment/appoinment-list/AppoinmentList";
import CreateAppoinment from "./pages/appoinment/create-appoinment/CreateAppoinment";
import RequestedList from "./pages/appoinment/requested-list/RequestedList";

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

              {/* Patient routes */}
              <Route path="/patient/create" element={<CreatePatient />} />
              <Route path="/patient/view" element={<PatientList />} />
              <Route path="/patient/category" element={<Category />} />
              <Route
                path="/patient/disable_authentication"
                element={<LoginDeactive />}
              />
              {/* Pathology Routes */}
              <Route path="/pathology/labtest" element={<LabTest />} />
              <Route path="/pathology/category" element={<TestCategory />} />

              {/* Inventory Routes */}
              <Route path="/inventory/chemical" element={<Chemical />} />
              <Route
                path="/inventory/category"
                element={<InventoryCategory />}
              />
              <Route path="/inventory/supplier" element={<Supplier />} />
              <Route path="/inventory/unit" element={<Unit />} />
              <Route path="/inventory/purchase" element={<Purchase />} />
              <Route path="/inventory/stock" element={<Stock />} />
              <Route
                path="/inventory/reagent_assigned"
                element={<ReagentAssigned />}
              />

              {/* Scheduled */}
              <Route path="/schedule" element={<Schedule/>} />
               {/* Appoinment */}
               <Route path="/appointment" element={<AppoinmentList/>} />
               <Route path="/appointment/add_appoinment" element={<CreateAppoinment/>} />
               <Route path="/appointment/requested_list" element={<RequestedList/>} />
            </Routes>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
export default App;
