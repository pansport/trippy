import React from "react";
import Hero from "../../components/Hero/Hero";

import HeroImage from "../../assets/12.jpg";
import Destination from "../../components/Destination/Destination";

export default function Home() {
  return (
    <>
      <Hero
        cName="hero"
        image={HeroImage}
        title="Your Journey Your Story"
        text="Choose your favourite destination."
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />
    </>
  );
}
