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
    title: "Patient Details",
    icon: <PersonStanding />,
    childrens: [
      {
        title: "Create Patient",
        icon: "bi-house-fill",
        path: "/",
      },
      {
        title: "Patient List",
        icon: "bi-info-circle-fill",
        path: "/about",
      },
      {
        title: "Category",
        icon: "bi-phone-fill",
        path: "/about",
      },
      {
        title: "Login Deactive",
        icon: "bi-question-circle-fill",
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
    title: "Schedule",
    icon: <CalendarCheck />,
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
    title: "Appoinment",
    icon: <StickyNote />,
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
    title: "Employee",
    icon: <UserSearch />,
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
    title: "Human Resource",
    icon: <Waypoints />,
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
    title: "Pathology",
    icon: <Microscope />,
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
