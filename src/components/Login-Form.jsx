import React, { useState } from 'react'
import login_controler from '../controllers/login-controller';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here
      login_controler(username, password,setUsername,setPassword);
    };
  return (
    <>
        <div className="max-lg:!h-[80vh]  login-container ">
          <form className="login-form" onSubmit={handleLogin}>
            <h2 className="font-bold text-2xl">Login</h2>
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
    </>
  )
}

export default LoginForm