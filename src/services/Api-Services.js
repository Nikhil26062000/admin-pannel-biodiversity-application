import axiosInstance from "../utils/axios-instance";
import { toast } from "react-hot-toast";

export const login = async (email, password) => {
  try {
    // Use toast.promise around the axiosInstance.post call
    const response = await toast.promise(
      axiosInstance.post("/admin/acc/login", {
        email: email,
        password: password,
      }),
      {
        loading: 'Logging in...',
        success: 'Login successful!',
        error: 'Login failed. Please try again.',
      }
    );

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

export const set_Privileges = async (formData) => {
  try {
    // Use toast.promise around the axiosInstance.post call
    const response = await toast.promise(
      axiosInstance.post("/admin/acc/privilegemap", formData),
      {
        loading: 'Updating...',
        success: 'Data has been updated',
        error: 'Error occurred',
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
