import React, { useContext } from 'react';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { logout } from '../controllers/logout-controller';
import useAuthListener from '../hooks/useAuthListener';
import { MyContext } from '../context/accountProvider';
const Header = () => {
  // useAuthListener()
  const {setToken} = useContext(MyContext)
  const handleLogout = () => {
    console.log("logout done");
    logout(setToken)
  }
  return (
    <header className="bg-[#125b57] text-white px-6 py-4 flex justify-between items-center sticky top-0 shadow-md">
      {/* Left Side - Dashboard Title */}
      <div className="text-xl font-bold max-sm:text-sm">
        Dashboard
      </div>

      {/* Right Side - Buttons */}
      <div className="flex space-x-4">
      <Link to="/users"><HomeIcon className='max-sm:text-sm'/></Link>

      <Link to="/manage-users"><PeopleAltIcon className='max-sm:text-sm'/></Link>

       <Link to="/"><span onClick={handleLogout}><LogoutIcon className='max-sm:text-sm'/></span></Link>
      </div>
    </header>
  );
};

export default Header;
