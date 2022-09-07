import React from "react";
import {
  FaFacebookSquare,
  FaTelegram,
  FaInstagramSquare,
  FaYoutube,
  FaRegUser,
} from "react-icons/fa";
import SelectLan from "../Header/SelectLan";
export default function Intro() {
  return (
    <div className="header-top">
      <i className="fa-brands fa-square-facebook"></i>{" "}
      <div className="container">
        {/* <ul className="header-social-container">
          <li>
            <a href="#" className="social-link">
              <FaFacebookSquare className="icons-fa" />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <FaTelegram className="icons-fa" />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <FaInstagramSquare className="icons-fa" />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <FaYoutube className="icons-fa" />
            </a>
          </li>
        </ul> */}

        <div className="header-top-actions">
          <SelectLan />
        </div>
      </div>
    </div>
  );
}
