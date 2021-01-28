import React from "react";
import { Link } from "react-router-dom";
import './Nav.scss'
function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
    </ul>
  );
}
// end

export default Nav;
