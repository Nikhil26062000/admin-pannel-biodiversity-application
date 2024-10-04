import React, { useState } from "react";
import "../styles/Login.css";

import LoginForm from "../components/Login-Form";

const Login = () => {
  return (
    <>
      {/* -------- This main section is for screen size greater than lg  ------------*/}

      <main className="flex justify-center max-lg:hidden">
        <LoginForm />
      </main>

      {/* ---------------- This section is for screen size smaller than lg ------------- */}

      <section className="lg:hidden">
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
