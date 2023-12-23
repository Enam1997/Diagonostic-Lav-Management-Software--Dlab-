import React from "react";
import "./sidebar.css";
import SidebarItem from "./SidebarItem";
import sidebarItemsData from "../../const-data/sidebar/sidebar.json";
import logo from "../../assets/logo.png";
import { sidebarMenus } from "../../const-data/sidebar/sidebar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="" />
        {/* <button
          onClick={() => setExpand((current) => !current)}
          className=" p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expand ? <ChevronFirst /> : <ChevronLast />}
        </button> */}
      </div>

      <div className="menu-container">
        {sidebarMenus.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
