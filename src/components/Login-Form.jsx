import React, { useState } from "react";
import { motion } from "framer-motion";
import login_controler from "../controllers/login-controller";
import { buttonVariants, containerVariants, inputVariants } from "../constants";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/accountProvider";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {setToken} = useContext(MyContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    login_controler(email,password,setEmail,setPassword,navigate,setToken)  
  };

  return (
    <motion.div
      className="max-lg:!h-[80vh] login-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.form
        className="login-form"
        onSubmit={handleLogin}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        <motion.h2
          className="font-bold text-2xl"
          variants={inputVariants}
          transition={{ duration: 0.5 }}
        >
          Login
        </motion.h2>

        <motion.div
          className="form-group"
          variants={inputVariants}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="email">Email</label>
          <motion.input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="border p-1 w-full rounded"
          />
        </motion.div>

        <motion.div
          className="form-group"
          variants={inputVariants}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="password">Password</label>
          <motion.input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="border p-1 w-full rounded"
          />
        </motion.div>

        <motion.button
          type="submit"
          className="login-button"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          transition={{ duration: 0.2 }}
        >
          Login
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default LoginForm;
