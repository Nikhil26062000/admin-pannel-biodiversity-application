import React, { useState } from "react";
import "../styles/Login.css";

import LoginForm from "../components/Login-Form";


const Login = () => {
  return (
    <>
      <main className="flex justify-center max-lg:hidden">
        {/* --------------------- Sidebar section ---------------------------------- */}
       
        <LoginForm />

      </main>

      <section className="lg:hidden">
        {/* <Header /> */}
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
