import React, { useState } from "react";
import "../styles/Login.css";
import Sidebar from "../components/Sidebar";
import login_controler from "../controllers/login-controller";
import LoginForm from "../components/Login-Form";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <main className="container_box max-lg:hidden">
        {/* --------------------- Sidebar section ---------------------------------- */}
        <section className="left_section">
          <Sidebar />
        </section>
        {/* ----------------------------------- Login form section -------------- */}
        <section className="right_section">
          <LoginForm />
        </section>
      </main>

      <section className="lg:hidden">
        <Header />
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
