import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Import CSS file

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset error message before attempting login
        try {
            const success = await login(username, password);
            if (success) {
                navigate("/Home");
            } else {
                setError("Invalid username or password. Please try again.");
            }
        } catch (error) {
            setError("Login failed. Please check your credentials.");
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-container">
                    <div className="logo-div">
                        <img src="/logo.jpg" alt="Company Logo" className="logo" />
                    </div>
                    <div className="title">
                        <div className="igogo"><span>IGOGO</span> Real Estate</div>
                        <div className="description">Consultants and Property Managers</div>
                    </div>                 
                </div>

                {/* Display error message if login fails */}
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label>Username or Email Address</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-wrapper">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <span 
                                className="eye-icon" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "👁️‍🗨️"}
                            </span>
                        </div>
                    </div>
                    <div className="login-and-forgot-password">
                        <a href="" className="forgot-password">Lost your password?</a>
                        <button type="submit" className="login-btn">Log In</button>
                    </div>
                    <div className="divider"></div>
                    <a href="/" className="back-link">← Go to Igogo Real Estate</a>
                </form>
            </div>
        </div>
    );
};

export default Login;
