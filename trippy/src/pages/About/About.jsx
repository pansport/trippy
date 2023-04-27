import React from "react";

import Hero from "../../components/Hero/Hero";

import AboutImage from "../../assets/night.jpg";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function About() {
  return (
    <>
      <Hero cName="hero-mid" image={AboutImage} title="About" />
      <AboutUs />
    </>
  );
}
