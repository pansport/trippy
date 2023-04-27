import React from "react";
import "./Destination.css";

import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/3.jpg";
import Mountain4 from "../../assets/4.jpg";
import DestinationData from "./DestinationData";

export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        cName="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde reiciendis non quidem, provident ab earum, laudantium pariatur voluptas placeat hic dolorem eligendi eaque cumque tempore nesciunt quibusdam sunt porro, repellat enim. Eum temporibus iusto, aut mollitia saepe, repellendus inventore assumenda, consequatur expedita nisi eaque quidem sunt commodi nostrum vero"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        cName="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde reiciendis non quidem, provident ab earum, laudantium pariatur voluptas placeat hic dolorem eligendi eaque cumque tempore nesciunt quibusdam sunt porro, repellat enim. Eum temporibus iusto, aut mollitia saepe, repellendus inventore assumenda, consequatur expedita nisi eaque quidem sunt commodi nostrum vero"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}
