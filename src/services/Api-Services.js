import axiosInstance from "../utils/axios-instance";

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: email,
      password: password,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const users_list = async () => {
  try {
    const response = await axiosInstance.get("/admin/acc/userlist");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
