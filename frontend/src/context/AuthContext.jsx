import React, { createContext, useState, useEffect } from "react";
import { loginUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
            setUser(JSON.parse(storedUser)); // Store user object, not just true
        }
    }, []);

    const login = async (username, password) => {
        try {
            const response = await loginUser(username, password);

            console.log("Login Response:", response); // Debugging

            if (response?.access) {  // Use "access" instead of "accessToken"
                localStorage.setItem("accessToken", response.access);
                localStorage.setItem("user", JSON.stringify(response.user)); // Store user object
                setUser(response.user);
                return true;
            } else {
                throw new Error("Invalid login response");
            }
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};
