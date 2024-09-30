import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://farmersforforests.org", // Set your base URL
});

// Add a request interceptor to include token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Skip adding token for login request
    if (!config.url.includes("/login")) {
      const token = localStorage.getItem("token"); // Retrieve token from storage
      if (token) {
        config.headers["token"] = `${token}`; // Set the token header
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle invalid token errors
axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, just return the response
    return response;
  },
  (error) => {
    // Check if the error status is 401 (Unauthorized) or 403 (Forbidden)
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // If the token is invalid or expired, clear localStorage and redirect to login
      localStorage.removeItem("token");
      // localStorage.removeItem('userid');
      // localStorage.removeItem('username');
      // localStorage.removeItem('role');

      // Redirect to login page using window.location to bypass React routing
      window.location.href = "/login";
    }

    // Reject the promise with the error to handle it in your components
    return Promise.reject(error);
  }
);

export default axiosInstance;
