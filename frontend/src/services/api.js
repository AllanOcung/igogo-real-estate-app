import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

console.log(import.meta.env.VITE_API_URL);


export const loginUser = async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}login/`, { username, password });
    localStorage.setItem("accessToken", response.data.access);
    localStorage.setItem("refreshToken", response.data.refresh);
    return response.data;
};

