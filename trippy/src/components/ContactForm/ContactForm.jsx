import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your message.." rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
