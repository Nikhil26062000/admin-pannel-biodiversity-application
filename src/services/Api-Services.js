import axiosInstance from "../utils/axios-instance";
import { toast } from "react-hot-toast";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/admin/acc/login", {
      email: email,
      password: password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const users_list = async () => {
  try {
    const response = await axiosInstance.get("/admin/acc/userlist");
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Convert fetch to axios instance for adminPrivelegs
export const adminPrivelegs = async () => {
  try {
    const response = await axiosInstance.get("/admin/acc/userlist");
    return response.data; 
  } catch (error) {
    console.log(error);
  }
};

// Convert fetch to axios instance for set_Privileges
export const set_Privileges = async (formData) => {
  try {
    const response = await axiosInstance.post("/admin/acc/privilegemap", formData);
    console.log(response.data);
    toast.success("Data has been updated")

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
