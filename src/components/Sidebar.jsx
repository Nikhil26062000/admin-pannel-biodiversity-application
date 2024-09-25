// // Sidebar.js
// import React from "react";
// import "../styles/Sidebar.css"; // Import the CSS file for styling
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { Link } from "react-router-dom";


// const Sidebar = () => {
//   return (
//     <div className="sidebar ">
//       <div className="sidebar-header">Dashboard</div>
//       <nav className="menu">
//         <div className="menu_list">
//           <span className="icon">
//             <PeopleAltIcon />
//           </span>
//           <Link to="/users"><span className="text">Manage Users</span></Link>
//         </div>

       

//         <div className="menu_list">
//           <span className="icon">
//             <LogoutIcon />
//           </span>
//           <Link to="/"><span className="text">Logout</span></Link>

//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;










import React from "react";
import { motion } from "framer-motion";
import "../styles/Sidebar.css"; // Import the CSS file for styling
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Animation Variants
  const sidebarVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'trans', stiffness: 50, damping: 10 }}
    >
      <motion.div 
        className="sidebar-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.div>
      <nav className="menu">
        <motion.div 
          className="menu_list"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span className="icon">
            <PeopleAltIcon />
          </span>
          <Link to="/users"><span className="text">Manage Users</span></Link>
        </motion.div>

        <motion.div 
          className="menu_list"
          variants={menuItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <span className="icon">
            <LogoutIcon />
          </span>
          <Link to="/"><span className="text">Logout</span></Link>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
