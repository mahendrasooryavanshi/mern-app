import React from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import Contact from "../contact/Contact";

export default function Navbar() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
        <ul className="navbar-nav  ">
          <li className="nav-item active">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/services"}>
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/contact"}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"register"}>
              Register
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-link">
        <Link to={"/login"}>
          <span style={{ color: "white" }}>Login</span>
        </Link>
      </div>
    </div>
  );
}
