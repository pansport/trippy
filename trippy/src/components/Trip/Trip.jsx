import React from "react";
import "./Trip.css";
import TripCard from "./TripCard";

import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

export default function Trip() {
  return (
    <div className="trip">
      <h1>Recent trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trip-card">
        <TripCard
          image={Trip1}
          heading="Trip in Indonesia"
          text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <TripCard
          image={Trip2}
          heading="Trip in Malesia"
          text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <TripCard
          image={Trip3}
          heading="Trip in France"
          text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
}
