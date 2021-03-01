import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss'
function Nav() {

  const existingToken = localStorage.getItem('token')
  const [authToken, setAuthToken] = useState(existingToken);
  let nav = <>
            <div className="nav-left">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-home"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            </div>
            <div className="nav-right">
              
            </div>
              
            </>;

  const setToken = (token) => {
    if (!token) {
      localStorage.removeItem('token')
    } else {
      localStorage.setItem('token', token);
    }
    setAuthToken(token)
  }

  if(authToken){
    nav = <>
            <li className="nav-item"><Link className="nav-link" to="/">
              <i className="fas fa-home"></i>
               Home
              </Link>
            </li>
          </>
  } else {
    nav = <>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link btn btn-danger btn-sm" to="/registerTherapist">Register Therapists</Link></li>
              <li className="nav-item"><Link className="nav-link btn btn-danger btn-sm" to="/therapists">Login Therapists</Link></li>
            </>;
  }

  return (
    <ul className="nav">
      {nav}
    </ul>
  );
}
// end

export default Nav;
