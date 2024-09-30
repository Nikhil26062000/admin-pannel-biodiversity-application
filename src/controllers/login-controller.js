import { login } from "../services/Api-Services";
import { reset_form_individually } from "../utils/Reset-form";

export const login_controler = (email, password, setEmail, setPassword) => {
  console.log("email :", email);
  console.log("Password :", password);
  login(email, password);
  reset_form_individually(setEmail, setPassword);
};

export default login_controler;
