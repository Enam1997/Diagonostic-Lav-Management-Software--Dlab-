import {
  BookMarked,
  Calculator,
  CalendarCheck,
  Globe,
  LayoutDashboard,
  Microscope,
  PackageSearch,
  PersonStanding,
  Ratio,
  Receipt,
  Settings,
  StickyNote,
  UserSearch,
  Waypoints,
} from "lucide-react";

export const sidebarMenus = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/",
  },
  {
    title: "Frontend",
    icon: <Globe />,
    childrens: [
      {
        title: "Setting",
        path: "/",
      },
      {
        title: "Menu",
        path: "/about",
      },
      {
        title: "Page Section",
        path: "/about",
      },
      {
        title: "Manage Page",
        path: "/about",
      },
      {
        title: "Slider",
        path: "/about",
      },
      {
        title: "Features",
        path: "/about",
      },
      {
        title: "Testimonial",
        path: "/about",
      },
      {
        title: "Service",
        path: "/about",
      },
      {
        title: "Faq",
        path: "/about",
      },
    ],
  },
  {
    title: "Patient Details",
    icon: <PersonStanding />,
    childrens: [
      {
        title: "Create Patient",
        path: "/patient/create",
      },
      {
        title: "Patient List",
        path: "/patient/view",
      },
      {
        title: "Category",
        path: "/patient/category",
      },
      {
        title: "Login Deactive",
        path: "/patient/disable_authentication",
      },
    ],
  },
  {
    title: "Inventory",
    icon: <PackageSearch />,
    childrens: [
      {
        title: "Chemical",
        path: "/inventory/chemical",
      },
      {
        title: "Category",
        path: "/inventory/category",
      },
      {
        title: "Supplier",
        path: "/inventory/supplier",
      },
      {
        title: "Unit",
        path: "/inventory/unit",
      },
      {
        title: "Purchase",
        path: "/inventory/purchase",
      },
      {
        title: "Stock",
        path: "/inventory/stock",
      },
      {
        title: "Reagent Assigned",
        path: "/inventory/reagent_assigned",
      },
      {
        title: "Reports",
        icon: <PackageSearch />,
        childrens: [
          {
            title: "Chemical",
            path: "/inventory/chemical",
          },
        ],
      },
    ],
  },
  {
    title: "Schedule",
    icon: <CalendarCheck />,
    path: "/schedule",
  },
  {
    title: "Appoinment",
    icon: <StickyNote />,
    childrens: [
      {
        title: "Appointment List",
        path: "/appointment",
      },
      {
        title: "Create Appointment",
        path: "appointment/add_appoinment",
      },
      {
        title: "Requested List",
        path: "appointment/requested_list",
      },
    ],
  },
  // Employee
  {
    title: "Employee",
    icon: <UserSearch />,
    childrens: [
      {
        title: "Employee List",
        path: "/employee-list",
      },
      {
        title: "Add Department",
        path: "/add-employee-department",
      },
      {
        title: "Add Designation",
        path: "/add-employee-designation",
      },
      {
        title: "Add Employee",
        path: "/add-employee",
      },
      {
        title: "Login Deactive",
        path: "/employee-login-deactivated-list",
      },
    ],
  },
  // Human Resource
  {
    title: "Human Resource",
    icon: <Waypoints />,
    childrens: [
      {
        title: "Setting",
        path: "/employee-list",
      },
      {
        title: "Menu",
        path: "/add-employee-department",
      },
      {
        title: "Page Section",
        path: "/about",
      },
      {
        title: "Manage Page",
        path: "/about",
      },
      {
        title: "Slider",
        path: "/about",
      },
      {
        title: "Features",
        path: "/about",
      },
      {
        title: "Testimonial",
        path: "/about",
      },
      {
        title: "Service",
        path: "/about",
      },
      {
        title: "Faq",
        path: "/about",
      },
    ],
  },
  // Pathology
  {
    title: "Pathology",
    icon: <Microscope />,
    childrens: [
      {
        title: "Lab Test",
        path: "/pathology/labtest",
      },
      {
        title: "Category",
        path: "/pathology/category",
      },
    ],
  },
  {
    title: "Refer Manager",
    icon: <BookMarked />,
    childrens: [
      {
        title: "Setting",
        icon: "bi-house-fill",
        path: "/",
      },
      {
        title: "Menu",
        icon: "bi-info-circle-fill",
        path: "/about",
      },
      {
        title: "Page Section",
        icon: "bi-phone-fill",
        path: "/about",
      },
      {
        title: "Manage Page",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Slider",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Features",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Testimonial",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Service",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Faq",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
    ],
  },
  {
    title: "Office Accounting",
    icon: <Calculator />,
    childrens: [
      {
        title: "Setting",
        icon: "bi-house-fill",
        path: "/",
      },
      {
        title: "Menu",
        icon: "bi-info-circle-fill",
        path: "/about",
      },
      {
        title: "Page Section",
        icon: "bi-phone-fill",
        path: "/about",
      },
      {
        title: "Manage Page",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Slider",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Features",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Testimonial",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Service",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Faq",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
    ],
  },
  {
    title: "Pathology Billing",
    icon: <Receipt />,
    childrens: [
      {
        title: "Setting",
        icon: "bi-house-fill",
        path: "/",
      },
      {
        title: "Menu",
        icon: "bi-info-circle-fill",
        path: "/about",
      },
      {
        title: "Page Section",
        icon: "bi-phone-fill",
        path: "/about",
      },
      {
        title: "Manage Page",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Slider",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Features",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Testimonial",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Service",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Faq",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
    ],
  },
  {
    title: "Investigation Report",
    icon: <Ratio />,
    childrens: [
      {
        title: "Setting",
        icon: "bi-house-fill",
        path: "/",
      },
      {
        title: "Menu",
        icon: "bi-info-circle-fill",
        path: "/about",
      },
      {
        title: "Page Section",
        icon: "bi-phone-fill",
        path: "/about",
      },
      {
        title: "Manage Page",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Slider",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Features",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Testimonial",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Service",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Faq",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
    ],
  },
  {
    title: "Setings",
    icon: <Settings />,
    childrens: [
      {
        title: "Setting",
        icon: "bi-house-fill",
        path: "/",
      },
      {
        title: "Menu",
        icon: "bi-info-circle-fill",
        path: "/about",
      },
      {
        title: "Page Section",
        icon: "bi-phone-fill",
        path: "/about",
      },
      {
        title: "Manage Page",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Slider",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Features",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Testimonial",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Service",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
      {
        title: "Faq",
        icon: "bi-question-circle-fill",
        path: "/about",
      },
    ],
  },
];
