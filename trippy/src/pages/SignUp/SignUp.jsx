import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import "./SignUp.css";

import ServiceImage from "../../assets/2.jpg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password && password.length < 7) {
      setError(true);
    }
  };

  return (
    <div>
      <Hero cName="hero-mid" image={ServiceImage} title="Sign Up" />
      <div className="form-container">
        {error && (
          <div className={`message ${"error"}`}>
            <h3>Something went wrong</h3>
          </div>
        )}
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}
