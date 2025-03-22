import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    return user ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
// In this code snippet, we define a ProtectedRoute component that takes a children prop. 
// This component uses the useContext hook to access the user object from the AuthContext. 
// If the user is authenticated (user is not null), the ProtectedRoute component renders the children. 
// Otherwise, it redirects the user to the login page ("/admin") using the Navigate component.