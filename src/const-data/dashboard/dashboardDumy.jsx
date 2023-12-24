import {
  Banknote,
  GraduationCap,
  PersonStanding,
  ScrollText,
  ShieldMinus,
  StickyNote,
  UserSearch,
  Wallet2,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Invoice",
    total: 20,
    botomText: "Today total",
    icon: <ScrollText size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Commission",
    total: "$200000",
    botomText: "Today total",
    icon: <ShieldMinus size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Income",
    total: "$7000",
    botomText: "Today total",
    icon: <Banknote size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Expense",
    total: "$13000",
    botomText: "Today total",
    icon: <Wallet2 size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Patient",
    total: 293,
    botomText: "TOTAL STRENGTH",
    icon: <PersonStanding size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Doctor",
    total: 43,
    botomText: "TOTAL STRENGTH",
    icon: <GraduationCap size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Employee",
    total: 83,
    botomText: "TOTAL STRENGTH",
    icon: <UserSearch size={50} color="var(--icon-color1)" />,
  },
  {
    title: "Appointment",
    total: 393,
    botomText: "PENDING REQUEST",
    icon: <StickyNote size={50} color="var(--icon-color1)" />,
  },
];

export const anualIncomeExpenseChardData = [
  {
    name: "Jan",
    expense: 4000,
    income: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    expense: 20000,
    income: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    expense: 2000,
    income: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    expense: 2780,
    income: 3908,
    amt: 2000,
  },
  {
    name: "May",
    expense: 1890,
    income: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    expense: 2390,
    income: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
];

export const appoinmentStatusThisMonthChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
