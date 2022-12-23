import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="" className="companyname">Alxr Data</Link>
        </li>
        <li>
          <Link to="/Categories" className="categ">Categories </Link>
        </li>
        <li>
          <Link to="/Loaction" className="locat">Location</Link>
        </li>
        <li >
          <Link to="/" className="lout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
