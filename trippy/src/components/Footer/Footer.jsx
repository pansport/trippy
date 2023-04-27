import React from "react";
import "./Footer.css";

import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="#">
            <ImFacebook2 />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <FaTwitterSquare />
          </a>
          <a href="#">
            <FaBehanceSquare />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="#">Changelog</a>
          <a href="#">Status</a>
          <a href="#">Licence</a>
          <a href="#">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="#">GitHub</a>
          <a href="#">Issues</a>
          <a href="#">Project</a>
          <a href="#">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#">Support</a>
          <a href="#">Troubleshooting</a>
          <a href="#">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Licence</a>
        </div>
      </div>
    </div>
  );
}
