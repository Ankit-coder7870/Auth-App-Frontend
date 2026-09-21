import useAuthStore from "@/store/authStore";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8082/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in requests
  timeout: 5000, // Set a timeout for requests (in milliseconds)
});

//every request, we will check if the access token is available in the store and add it to the request headers
apiClient.interceptors.request.use(
  (config) => {
    // You can add any custom logic here before the request is sent 
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }  
    return config;
  });

export default apiClient;