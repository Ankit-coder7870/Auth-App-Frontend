import type RegisterData from "@/models/RegisterData";
import apiClient from "@/config/ApiClient";
import type  LoginData  from "@/models/LoginData";
import type User from "@/models/User";
import type LoginResponseData from "@/models/LoginResponseData";

//register function to register user
export const registerUser = async (data: RegisterData) => {
    //api call to register user
    const response = await apiClient.post("/auth/register", data);
    return response.data;
}

//login function to login user
export const loginUser = async (loginData:LoginData) => {
    //api call to login user
    const response = await apiClient.post("/auth/login", loginData);
    return response.data;
}

//logout function to logout user
export const logoutUser = async () => {
    //api call to logout user
    const response = await apiClient.post("/auth/logout");
    return response.data;
}   

//get current login user
export const getCurrentUser = async (email?: string) => {
    //api call to get current user
    const response = await apiClient.get<User>(`/users/email/${email}`);
    return response.data;
}
 
//refresh token

export const refreshToken = async () => {
  const response = await apiClient.post<LoginResponseData>(`/auth/refresh`);
  return response.data;
};

