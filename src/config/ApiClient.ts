import { refreshToken } from "@/services/AuthService";
import useAuthStore from "@/store/authStore";
import axios from "axios";
import toast from "react-hot-toast";

const apiClient = axios.create({
  baseURL: "http://localhost:8082/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in requests
  timeout: 5000, // Set a timeout for requests (in milliseconds)
});

//every request, we will check if the access token is available in the store and add it to the request headers
apiClient.interceptors.request.use((config) => {
  // You can add any custom logic here before the request is sent
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// response interceptors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const is401 = error.response.status === 401;
    const original = error.config;
    console.log(original);
    console.log("original retry: ", original._retry);
    if (!is401 || original._retry) {
      //message:

      if (error.response && error.response.data)
        toast.error(error.response.data?.message || "An error occurred");
      console.error("API Error:", error.response.data);
      console.error("Full error:", error);

      return Promise.reject(error);
    }

    let isRefreshing = false;
    let pending: any[] = [];

    function queueRequest(cb: any) {
      pending.push(cb);
    }

    function resolveQueue(newToken: string) {
      pending.forEach((cb) => cb(newToken));
      pending = [];
    }

    original._retry = true;
    //we will try to refresh the token:
    if (isRefreshing) {
      console.log("added to queue");
      return new Promise((resolve, reject) => {
        queueRequest((newToken: string) => {
          if (!newToken) return reject();
          original.headers.Authorization = `Bearer ${newToken}`;
          resolve(apiClient(original));
        });
      });
    }

    //start refresh
    isRefreshing = true;

    try {
      console.log("start refreshing...");
      const loginResponse = await refreshToken();
      const newToken = loginResponse.accessToken;
      if (!newToken) throw new Error("no access token received");
      useAuthStore
        .getState()
        .changeLocalLoginData(
          loginResponse.accessToken,
          loginResponse.user,
          true,
        );
      //
      resolveQueue(newToken);
      original.headers.Authorization = `Bearer ${newToken}`;
      return apiClient(original);
    } catch (error) {
      resolveQueue("null");
      useAuthStore.getState().logout();
      return Promise.reject(error);
    } finally {
      isRefreshing = false;
    }
  },
);

export default apiClient;
