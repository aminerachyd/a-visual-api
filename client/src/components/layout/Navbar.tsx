import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="nav-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div>
            <Link className="navbar-brand" to="./index.html">
              A Visual API
            </Link>
          </div>
          <button
            className="navbar-toggler d-block-sm align-self-start"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/aminerachyd"
                  target="_"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
