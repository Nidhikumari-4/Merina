import React from "react";
import "./Dashboard.scss";
import Navbar from "@/app/components/Navbar/Navbar";
import SideBar from "@/app/components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="dashboard_page">
      <SideBar />

      <div className="dashboard_area">
        <Navbar />
        <div className="dashboard">dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
