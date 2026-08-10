import type RegisterData from "@/models/RegisterData";
import apiClient from "@/config/ApiClient";

export const registerUser = async (data: RegisterData) => {
    //api call to register user
    const response = await apiClient.post("/auth/register", data);
    console.log("Response from registerUser:", response.data);
    return response.data;
}

