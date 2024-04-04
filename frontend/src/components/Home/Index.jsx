import React from "react";
import About from "../About/About";
import Footer from "../footer/Footer";
import Slider from "../Slider/Slider";
import Team from "../Team/Team";
import Work from "../Work/Work";
import Service from "../Service/Service";
import Header from "../Header/Header";

export default function Index() {
  return (
    <>
      <Slider />
      <About />
      <Service />
      <Team />
      <Work />
    </>
  );
}
