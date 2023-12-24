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
        path: "/",
      },
      {
        title: "Patient List",
        path: "/about",
      },
      {
        title: "Category",
        path: "/about",
      },
      {
        title: "Login Deactive",
        path: "/about",
      },
    ],
  },
  {
    title: "Inventory",
    icon: <PackageSearch />,
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
    title: "Schedule",
    icon: <CalendarCheck />,
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
    title: "Appoinment",
    icon: <StickyNote />,
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
  // Employee
  {
    title: "Employee",
    icon: <UserSearch />,
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
  // Human Resource
  {
    title: "Human Resource",
    icon: <Waypoints />,
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
  // Pathology
  {
    title: "Pathology",
    icon: <Microscope />,
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
