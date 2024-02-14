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
import EmployeeList from "./pages/employee/employee-list/EmployeeList";
import Department from "./pages/employee/add-department/Department";
import Designation from "./pages/employee/add-designation/Designation";
import AddEmployee from "./pages/employee/add-employee/AddEmployee";
import LoginDeactiveEmployee from "./pages/employee/login-deactive/LoginDeactiveEmployee";
import SetReferral from "./pages/refer-manager/set-referral/SetReferral";
import Setting from "./pages/frontend/setting/Setting";
import Menu from "./pages/frontend/menu/Menu";
import Features from "./pages/frontend/features/Features";
import Testimonail from "./pages/frontend/testimonials/Testimonail";

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

              {/* Frontend */}
              <Route path="/frontend/setting" element={<Setting />} />
              <Route path="/frontend/menu" element={<Menu />} />
              <Route path="/frontend/features" element={<Features />} />
              <Route path="/frontend/testimonial" element={<Testimonail/>} />

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
              <Route path="/schedule" element={<Schedule />} />
              {/* Appoinment */}
              <Route path="/appointment" element={<AppoinmentList />} />
              <Route
                path="/appointment/add_appoinment"
                element={<CreateAppoinment />}
              />
              <Route
                path="/appointment/requested_list"
                element={<RequestedList />}
              />
              {/* Employee */}
              <Route path="/employee-list" element={<EmployeeList />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route
                path="/add-employee-designation"
                element={<Designation />}
              />
              <Route
                path="/employee-login-deactivated-list"
                element={<LoginDeactiveEmployee />}
              />
              {/* Refer Manager */}
              <Route path="/refer/set-referal" element={<SetReferral />} />
            </Routes>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
export default App;
