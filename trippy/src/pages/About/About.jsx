import React from "react";

import Hero from "../../components/Hero/Hero";

import AboutImage from "../../assets/night.jpg";

export default function About() {
  return (
    <>
      <Hero cName="hero-mid" image={AboutImage} title="About" />
    </>
  );
}
