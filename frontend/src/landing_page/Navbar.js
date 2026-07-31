import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      style={{ minHeight: "70px" }}
    >
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src="media/images/imagecopy.png"
            alt="Zerodha Logo"
            style={{ width: "160px" }}
          />
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-custom" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                <i className="fa-solid fa-bars fs-5"></i>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;