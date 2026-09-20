import type RegisterData from "@/models/RegisterData";
import apiClient from "@/config/ApiClient";
import type  LoginData  from "@/models/LoginData";

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
    

