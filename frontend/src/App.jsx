import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";  
import Login from "./pages/Login";
import Home from "./pages/Home";  
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />     {/* Landing page (Default) */}
                    <Route path="/Admin" element={<Login />} />   {/* Admin Login page */}

                    {/* Protected Home page */}
                    <Route 
                        path="/Home" 
                        element={
                            <ProtectedRoute>
                            <Home />
                            </ProtectedRoute>
                            } 
                    />    
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
