import React from "react";
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";
import logo from '../assets/logo.png'; 
import './SideNav.scss'




function SideNav() {

  const history = useHistory();


  function handleLogOut(evt){
    evt.preventDefault();
    console.log("Loging OUT");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    history.push('/');
    
  }

  



  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-text mx-3">
						<img className="logo" src={logo}/><br></br>
                Remote Mental Health
          </div>
      </a>
      <li className="nav-item active">
        <Link className="nav-link collapsed" to={{
                pathname:'/hq',
                type:"therapist"
            }}> <i className="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link collapsed" to={{
                pathname:'/therapistprofile',
                type:"therapist"
            }}> <i className="fas fa-fw fa-cog"></i> <span>Profile</span>
          </Link>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar" >
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Edit Profile</h6>
                  <a className="collapse-item" href="/logout">Logout</a>
              </div>
          </div>
      </li>
      
      <hr className="sidebar-divider"/>
      
      <li className="nav-item">
            <a className="nav-link" href="/" data-target="#collapsePages" onClick={handleLogOut}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Log Out</span>
          </a>
      </li>
  </ul>
  );
}

export default SideNav;

      