import React from "react";
import RoleSelection from "./Admin_Privilege";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Manage_User = () => {
  return (
    <>
      <div className="flex max-lg:hidden">
        <div className="w-[20%] ">
          <Sidebar />
        </div>
        <div className="w-[80%] flex justify-center relative ">
          <RoleSelection />
        </div>
      </div>
      <section>
      <Header />
      <div className="w-full flex flex-col items-center relative lg:hidden">
       
        <RoleSelection />
      </div>
      </section>
    </>
  );
};

export default Manage_User;
