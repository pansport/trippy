import React from "react";

import Hero from "../../components/Hero/Hero";
import Trip from "../../components/Trip/Trip";

import ServiceImage from "../../assets/2.jpg";

export default function Service() {
  return (
    <>
      <Hero cName="hero-mid" image={ServiceImage} title="Service" />
      <Trip />
    </>
  );
}
