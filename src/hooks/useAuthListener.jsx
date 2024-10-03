import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/accountProvider";

const useAuthListener = () => {
  const navigate = useNavigate();
  const {setToken} = useContext(MyContext)

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Log out the user if the token is missing
        // Add your logout logic here (e.g., clear user state, redirect, etc.)
        localStorage.removeItem("userid");
        localStorage.removeItem("username")
        navigate("/"); // Redirect to login page
        setToken(null)
      }
    };

    // Listen to storage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);
};

export default useAuthListener;
