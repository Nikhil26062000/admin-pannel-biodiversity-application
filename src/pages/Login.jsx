import React, { useState } from "react";
import "../styles/Login.css";
import Sidebar from "../components/Sidebar";
import login_controler from "../controllers/login-controller";
import LoginForm from "../components/Login-Form";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <main className="flex justify-center max-lg:hidden">
        {/* --------------------- Sidebar section ---------------------------------- */}
       
        <LoginForm />

      </main>

      <section className="lg:hidden">
        <Header />
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
