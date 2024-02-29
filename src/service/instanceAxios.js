import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// Create Axios instance
// const baseURL = process.env.BASE_URL;
// const baseURL = "https://plankton-app-gascv.ondigitalocean.app/api";
const baseURL = "http://localhost:8080/api";
// const baseURL = import.meta.env.BASE_URL;
console.log("sdfksdf", baseURL);
// Create Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Now you can use axiosInstance to make HTTP requests
// For example:
// axiosInstance
//   .get("/endpoint")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

export default axiosInstance;
