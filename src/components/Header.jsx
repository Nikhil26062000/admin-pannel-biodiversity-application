import React from 'react';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#125b57] text-white px-6 py-4 flex justify-between items-center sticky top-0 shadow-md">
      {/* Left Side - Dashboard Title */}
      <div className="text-2xl font-bold max-sm:text-sm">
        Dashboard
      </div>

      {/* Right Side - Buttons */}
      <div className="flex space-x-4">
      <Link to="/users"><PeopleAltIcon className='max-sm:text-sm'/></Link>

       <Link to="/"><LogoutIcon className='max-sm:text-sm'/></Link>
      </div>
    </header>
  );
};

export default Header;
