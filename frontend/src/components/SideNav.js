import React from "react";


function SideNav() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-text mx-3">Remote Mental Health</div>
      </a>
      <li className="nav-item active">
        <a className="nav-link" href="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
          <a className="nav-link collapsed" href="/profile" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog"></i>
              <span>Profile</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar" >
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Edit Profile</h6>
                  <a className="collapse-item" href="/logout">Logout</a>
              </div>
          </div>
      </li>
      <li className="nav-item">
          <a className="nav-link collapsed" href="/NewEntry" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench"></i>
              <span>Entries</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar" >
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="utilities-color.html">Create new Entry</a>
              </div>
          </div>
      </li>
      <hr className="sidebar-divider"/>
      <li className="nav-item">
          <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar" >
              <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="login.html">Contact</a>
                  <a className="collapse-item" href="register.html">Our Team</a>
                  <a className="collapse-item" href="forgot-password.html"> Our work </a>
                  <div className="collapse-divider"></div>
                  <a className="collapse-item" href="/">Remote Mental Health Main Site</a>
              </div>
          </div>
      </li>
  </ul>
  );
}

export default SideNav;

      