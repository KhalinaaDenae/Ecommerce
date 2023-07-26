import React from "react";

import Occassion from "../components/homescreen/Occasion";
import About from "../components/homescreen/About";
import HeroSection from "../components/homescreen/heroSection";
import NewArrival from "../components/homescreen/NewArrival";
import Categories from "../components/homescreen/categories";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <NewArrival />
      <About />
      <Categories />
      <Occassion />
    </>
  );
}

export default LandingPage;
