import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4040",
});

export default axiosInstance;
