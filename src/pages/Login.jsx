import React, { useState } from "react";
import "../styles/Login.css";
import Sidebar from "../components/Sidebar";
import login_controler from "../controllers/login-controller";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here
      login_controler(username, password)
    };
  return (
    <main className="container">
    {/* --------------------- Sidebar section ---------------------------------- */}
      <section className="left_section">
        <Sidebar />
      </section>
    {/* ----------------------------------- Login form section -------------- */}
      <section className="right_section">
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
