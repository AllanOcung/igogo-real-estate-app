import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
     return (
         <div>
             <h1>Welcome to Our Website</h1>
             <p>This is a public page accessible to all users.</p>
             <Link to="/admin">Admin Login</Link> {/* Link to login page */}
         </div>
     );
 };
 
 export default Landing;