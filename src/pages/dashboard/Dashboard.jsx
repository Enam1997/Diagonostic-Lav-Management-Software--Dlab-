import React from "react";
import ScrolabelContainer from "../../layout/scrollabel-container/ScrolabelContainer";
import PagenameContainer from "../../layout/pagename-container/PagenameContainer";
import "./dashboard.css";
import { Box, Divider, Grid } from "@mui/material";
import { ScrollText } from "lucide-react";
import {
  dashboardStats,
  anualIncomeExpenseChardData,
  appoinmentStatusThisMonthChartData,
  patentFeesSummaryThisMonth,
} from "../../const-data/dashboard/dashboardDumy";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const Dashboard = () => {
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div className="page-container">
      <PagenameContainer>Dashboard</PagenameContainer>
      <ScrolabelContainer>
        <Box className="page-main-content">
          <Box className="top-stats">
            <Grid container rowSpacing={3} columnSpacing={2}>
              {dashboardStats.map((item, index) => (
                <Grid key={index} item sm={12} md={6} lg={3}>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    className="card1 stats-item"
                  >
                    <Box>
                      <h4>{item.title}</h4>
                      <h2>{item.total}</h2>
                      <h5>{item.botomText}</h5>
                    </Box>

                    {item.icon}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className="second-section section-top-margin ">
            <Grid container spacing={3}>
              <Grid item md={12} lg={8}>
                <Box className="card1">
                  <h3>Annual Income Vs Expense 2023</h3>
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    style={{ paddingTop: "10px" }}
                  >
                    <LineChart
                      width={500}
                      height={300}
                      data={anualIncomeExpenseChardData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="income"
                        stroke="var(--theme-color-2)"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="var(--status-color-2)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
              <Grid item md={12} lg={4}>
                <Box className="card1">
                  <h3>Appointment Status - December 2023</h3>{" "}
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        dataKey="value"
                        data={appoinmentStatusThisMonthChartData}
                        fill="#8884d8"
                        label
                      />
                    </PieChart>
                    <Legend
                      iconSize={10}
                      layout="vertical"
                      verticalAlign="middle"
                      wrapperStyle={style}
                    />
                  </ResponsiveContainer>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="third-section card1 section-top-margin">
            <h3>Patient Fees Summary - December</h3>
            <ResponsiveContainer
              width="100%"
              height="100%"
              style={{ paddingTop: "10px" }}
            >
              <LineChart
                width={500}
                height={300}
                data={patentFeesSummaryThisMonth}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="netPayable"
                  stroke="var(--status-color-1 )"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="totalPaid"
                  stroke="var(--theme-color-2)"
                />
                <Line
                  type="monotone"
                  dataKey="totalDue"
                  stroke="var(--status-color-2)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </ScrolabelContainer>
    </div>
  );
};

export default Dashboard;
