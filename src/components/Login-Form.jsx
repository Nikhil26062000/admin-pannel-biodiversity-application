
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import login_controler from '../controllers/login-controller';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    login_controler(username, password, setUsername, setPassword);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <motion.div 
        className="max-lg:!h-[80vh] login-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            <label htmlFor="username">Username</label>
            <motion.input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
    </>
  );
}

export default LoginForm;
