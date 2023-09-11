import React from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="m-6">
      <h1 className="text-red-600 font-bold text-3xl">
        Welcome to Post Office
      </h1>
      <h1 className="text-2xl text-amber-400 mt-6">
        {" "}
        The Next Generation of Posting
      </h1>
      <button className="bg-lime-500 p-2 m-2"> Get Started</button>

      <div className="flex m-6">
        <ul className="m-6">
          <NavLink to="/Pagination">
            <button>Pagination Component</button>
          </NavLink>
        </ul>
        <ul className="m-6">
          <NavLink to="/Pagination">
            <button>New Component</button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
