import { reset_form_individually } from "../utils/Reset-form";
import { encrypt } from "../utils/calcMD5";

import { login } from "../services/Api-Services";

export const login_controler = async (
  email,
  password,
  setEmail,
  setPassword,
  navigate,
  setToken
) => {
  console.log("email :", email);
  console.log("Password :", password);

  // Hashing the password
  const hashPassword = encrypt(password, 12);
  console.log("hashPassword :", hashPassword);

  // Calling API for login
  const api_response = await login(email, hashPassword);
  console.log(api_response)
  // Check if the API response is valid and contains the expected data
  if (api_response.data && api_response.data.jwt_token) {
    localStorage.setItem("token", api_response.data.jwt_token);
    localStorage.setItem("userid", api_response.data.user_details.userid);
    localStorage.setItem("username", api_response.data.user_details.username);
    localStorage.setItem("role", api_response.data.user_details.role);
    setToken(api_response.data.jwt_token);
    navigate("/users");

    // Resetting the form data
    reset_form_individually(setEmail, setPassword);
  } else {
    navigate("/");
  }
};

export default login_controler;
