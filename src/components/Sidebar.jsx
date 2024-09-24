// Sidebar.js
import React from "react";
import "../styles/Sidebar.css"; // Import the CSS file for styling
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Dashboard</div>
      <nav className="menu">
        <div className="menu_list">
          <span className="icon">
            <PeopleAltIcon />
          </span>
          <span className="text">Manage Users</span>
        </div>

        <div className="menu_list">
          <span className="icon">
            <PostAddIcon />
          </span>
          <span className="text">Manage Post</span>
        </div>

        <div className="menu_list">
          <span className="icon">
            <LogoutIcon />
          </span>
          <span className="text">Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
