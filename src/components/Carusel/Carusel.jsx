import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Carusel() {
  return (
    <Carousel autoplay>
      <div className="slider-item">
        <img
          src="./assets/images/slider-3-product.png"
          alt="women's latest fashion sale"
          className="banner-img"
        />

        <div className="banner-content">
          <p className="banner-subtitle">Trending item</p>

          <h2 className="banner-title">Women's latest fashion sale</h2>

          <p className="banner-text">
            starting at &dollar; <b>20</b>.00
          </p>

          <a href="#" className="banner-btn">
            Shop now
          </a>
        </div>
      </div>
      <div className="slider-item">
        <img
          src="./assets/images/slider-3-cover.jpg"
          alt="modern sunglasses"
          className="banner-img"
        />

        <div className="banner-content">
          <p className="banner-subtitle">Trending accessories</p>

          <h2 className="banner-title">Modern sunglasses</h2>

          <p className="banner-text">
            starting at &dollar; <b>15</b>.00
          </p>

          <a href="#" className="banner-btn">
            Shop now
          </a>
        </div>
      </div>

      <div className="slider-item">
        <img
          src="./assets/images/slider-1-product.png"
          alt="new fashion summer sale"
          className="banner-img"
        />

        <div className="banner-content">
          <p className="banner-subtitle">Sale Offer</p>

          <h2 className="banner-title">New product summer sale</h2>

          <p className="banner-text">
            starting at &dollar; <b>29</b>.99
          </p>

          <a href="#" className="banner-btn">
            Shop now
          </a>
        </div>
      </div>
    </Carousel>
  );
}
