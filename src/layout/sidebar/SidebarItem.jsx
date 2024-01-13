import { ArrowDown, Plus, Settings } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [itemOpen, setItemOpen] = useState(false);

  if (item.childrens) {
    return (
      <div
        className={`sidebar-item ${itemOpen ? "open" : ""} `}
        
      >
        <div className="sidebar-title">
          <span>
            {" "}
            {item.icon && <span className="item-icon">{item.icon}</span>}
            {item.title}
          </span>
          <ArrowDown className="toggle-btn" size={"14px"} onClick={() => setItemOpen(!itemOpen)}/>
          {/* <Plus className="toggle-btn" /> */}
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      // <a href={item.path || "#"} className={`sidebar-item plain`}>
      //   {" "}
      //   {item?.icon && <span className="item-icon">{item.icon}</span>}
      //   {item.title}
      // </a>
      <Link to={item.path || "#"} className={`sidebar-item plain`}>
        {item?.icon && <span className="item-icon">{item.icon}</span>}
        {item.title}
      </Link>
    );
  }
};

export default SidebarItem;
