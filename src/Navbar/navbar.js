import React, { useRef } from "react";
import "./navbar.css";

function Navbar() {
  const navbarLinks = useRef(null);

  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };
  return (
    
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src={require("../assets/logo.png")}
            height="90"
            width="160"
            alt="logo of southeastern"
          />

          <button
            onClick={(e) => {
              handleNavbarButton(e);
            }}
            className="navbar-toggler"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div ref={navbarLinks} className="navbar-links menu-collapse">
            <ul className="links-list">
              <ul style={{padding:15,textDecoration:'none'}} >
                <a href="https://www.southeastern.edu/apply/index.html"><b>Apply</b></a>
              </ul>

              <ul style={{padding:15}}>
                <a href="https://www.southeastern.edu/admin/admissions/index.html"><b>Admission</b></a>
              </ul>

              <ul style={{padding:15}}>
                <a href="https://www.southeastern.edu/alumni_donors/alumni_assoc/index.html"><b>Alumni</b></a>
              </ul>
              <ul style={{padding:15}}>
                <a href="https://www.southeastern.edu/alumni_donors/foundation/index.html"><b>Give</b></a>
              </ul>
              <ul style={{padding:15}}>
                <a href="https://www.southeastern.edu/myden/"><b>My Den</b></a>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
