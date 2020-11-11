import React, { useRef } from "react";
import "./navbar.css";
import { Button } from "reactstrap";


function Navbar() {
  const navbarLinks = useRef(null);

  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };
  
  return (
    <div>
    <div className="top-nav">
    <Button color="secondary" style={{marginLeft:'1vw',marginRight:'1vw'}}>Change Font size</Button>{' '}
    <Button color="secondary">Choose Font style</Button>{' '}
    </div>
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
                <a href="https://www.southeastern.edu/apply/index.html" className='link' ><b>Apply</b></a>
              </ul>

              <ul style={{padding:15}}>
                <a href="https://www.southeastern.edu/admin/admissions/index.html" className='link'><b>Admission</b></a>
              </ul>

              <ul style={{padding:15}}>
                <a href="https://www.southeastern.edu/alumni_donors/alumni_assoc/index.html"className='link'><b>Alumni</b></a>
              </ul>
              <ul style={{padding:15}}>
              <a href="https://www.southeastern.edu/myden/"className='link'><b>My Den</b></a>
              </ul>
              <ul style={{padding:15}}>
                <a href="http://www.southeastern.edu/resources/howdoi/moodle/login/index.html"className='link'><b>Login</b></a>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
}

export default Navbar;
