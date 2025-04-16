import React from "react";  
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>    
      <Link to="/contact">Contact</Link>

      {/* anchor link se page reload hota hai
        <a href="/">Home</a>
     lekin Link se page reload nahi hota hai */}

    </div>
  );
}
export default Header;