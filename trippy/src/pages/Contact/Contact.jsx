import React from "react";

import Hero from "../../components/Hero/Hero";

import ContactImage from "../../assets/1.jpg";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Hero cName="hero-mid" image={ContactImage} title="Contact" />
      <ContactForm />
    </>
  );
}
