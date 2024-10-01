import React from 'react';
import RoleSelection from './Admin_Privilege';
import Sidebar from '../components/Sidebar';

const Manage_User = () => {
  return (
   <div className="flex">
   <div className="w-[20%] ">
    <Sidebar/>
   </div>
   <div className="w-[80%] flex justify-center relative ">
    <RoleSelection/>
  
   </div>

   </div>
  
  );
}

export default Manage_User;
