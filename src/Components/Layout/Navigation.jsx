import React from "react";
import postal from "../../Assets/IndiaPostLogo.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="m-6">
      <nav className="flex space-x-3 bg-red-600 p-3 rounded-lg text-amber-300 font-bold text-xl items-center">
        <img src={postal} className="h-6 rounded-full" alt="IndiaPostLogo" />
        <div className="flex-grow" />{" "}
        {/* Empty div to push h1 tags to the right */}
        <h1>
          <NavLink to="/">Home</NavLink>
        </h1>
        <NavLink to="/about">
          <h1>About</h1>
        </NavLink>
        <NavLink to="/contact">
          <h1>Contact</h1>
        </NavLink>
        <NavLink to="/Login">
          <h1>Login</h1>
        </NavLink>
        <NavLink to="/202">
          <h1>No Route</h1>
        </NavLink>
        
      
      </nav>
    </div>
  );
};

export default Navigation;
