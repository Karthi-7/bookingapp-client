import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const logout=()=>{
    localStorage.removeItem('currentUser');
    
  }

  return (
    <div className="navv">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            OrbizRooms
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" style={{color:"whiteSmoke"}}></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-5">
              {user ? (
                <>
                  {/* <h1 style={{ color: "whitesmoke" }}>{user.data.name}</h1> */}
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle me-5 nv-btn"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                    <i className="fa fa-user user-icon"/>
                     {user.name}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                      <a className="dropdown-item" href="/logout" onClick={logout}>
                        Logout
                      </a>
                     
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
