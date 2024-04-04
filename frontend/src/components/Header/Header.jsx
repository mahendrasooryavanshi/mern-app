import React from "react";
import Slider from "../Slider/Slider";
import Navbar from "../navBar/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="hero_area">
      <div className="header_section">
        <div className="container-fluid">
          <div className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to={"/"}>
              <span>Seotech</span>
            </Link>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
