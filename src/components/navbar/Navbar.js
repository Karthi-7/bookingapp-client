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
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">
            OrbizRooms
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"><i class="fa-solid fa-bars" style={{color:"whiteSmoke"}}></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-5">
              {user ? (
                <>
                  {/* <h1 style={{ color: "whitesmoke" }}>{user.data.name}</h1> */}
                  <div class="dropdown">
                    <button
                      class="btn btn-dark dropdown-toggle me-5 nv-btn"
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
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="/profile">
                        Profile
                      </a>
                      <a class="dropdown-item" href="/logout" onClick={logout}>
                        Logout
                      </a>
                     
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li class="nav-item ">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
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
