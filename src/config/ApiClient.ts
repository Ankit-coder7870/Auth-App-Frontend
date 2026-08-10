import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8082/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in requests
  timeout: 5000, // Set a timeout for requests (in milliseconds)
});

export default apiClient;