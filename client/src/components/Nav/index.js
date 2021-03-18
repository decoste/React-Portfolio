import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Doc from '../../documents/resume.pdf'

function Nav() {
  return (
   <nav className="navbar navbar-inverse navbar-expand-lg navbar-light  NavColor font fixed-top ">
       <div>
        <h3>Ala DeCoste</h3>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
     
      <div>
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>

         
          <li className="nav-item">
            <Link
              to="/certifications"
              className={window.location.pathname === "/certifications" ? "nav-link active" : "nav-link"}
            >
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className={window.location.pathname === "/education" ? "nav-link active" : "nav-link"}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link   href={Doc} target="blank"
              to={Doc} 
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
                
                
                
              Resume
            </Link>
          </li>
        </ul>
        </div>
        </div>
     
    </nav>       
  );
}

export default Nav;
