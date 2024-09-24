// Sidebar.js
import React from "react";
import "../styles/Sidebar.css"; // Import the CSS file for styling
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-header">Dashboard</div>
      <nav className="menu">
        <div className="menu_list">
          <span className="icon">
            <PeopleAltIcon />
          </span>
          <Link to="/users"><span className="text">Manage Users</span></Link>
        </div>

       

        <div className="menu_list">
          <span className="icon">
            <LogoutIcon />
          </span>
          <Link to="/"><span className="text">Logout</span></Link>

        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
