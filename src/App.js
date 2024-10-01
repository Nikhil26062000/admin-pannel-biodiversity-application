import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Admin_Privilege from "./pages/Admin_Privilege";
import useAuthListener from "./hooks/useAuthListener";
import { MyContext } from "./context/accountProvider";
import Manage_User from "./pages/Manage_User";


const App = () => {
  useAuthListener()
  const {token} = useContext(MyContext)
  return (

      <Routes>
        <Route path="/" element={token ? <Users/>: <Login/>} />
        <Route path="/users" element={token ? <Users/>: <Navigate to="/"/> } />
        <Route path="/manage-users" element={token ? <Manage_User/>: <Navigate to="/"/> } />

      </Routes>
  
  );
};

export default App;
