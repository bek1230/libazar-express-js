import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCategoryReducer } from "../../Redux/Reducers/openCategory";
import { Button, Drawer, Radio, Menu } from "antd";
import url from "../../url.json";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function Sidebar({ t }) {
  const navigate = useNavigate();
  const active = useSelector((state) => state.openCategory);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch(url.url + "category/get")
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((error) => console.log(error));
  }, []);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const onClick = (e) => {
    console.log("click ", e);
    category?.map((res) => {
      if (res.id == e.key) {
        navigate({
          pathname: "/products",
          search: `?id=${res.id}`,
        });
      }
    });
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  function ItemsCat() {
    const items = category?.map((res, i) =>
      getItem(
        res.name,
        res.id,
        <img
          style={{
            marginRight: 5,
            width: 30,
            height: 30,
            objectFit: "contain",
          }}
          src={res.imageUrl}
          alt="footwear"
          className="menu-title-img"
        />
      )
    );
    return items;
  }

  const dispatch = useDispatch();
  return (
    <div className="sidebar-overlay">
      <div className="sidebar  has-scrollbar">
        <div className="sidebar-category">
          <div className="sidebar-top">
            <h2 className="sidebar-title">{t("Category")}</h2>

            <button
              className="sidebar-close-btn"
              onClick={() => dispatch(openCategoryReducer(""))}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="sidebar-menu-category-list">
            <Menu
              onClick={onClick}
              style={{
                width: "100%",
              }}
              mode="inline"
              items={ItemsCat()}
            />
          </ul>
        </div>

        <div className="product-showcase">
          <h3 className="showcase-heading">best sellers</h3>

          <div className="showcase-wrapper">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/1.jpg"
                    alt="baby fabric shoes"
                    width="75"
                    height="75"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">baby fabric shoes</h4>
                  </a>

                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$5.00</del>
                    <p className="price">$4.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/2.jpg"
                    alt="men's hoodies t-shirt"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">men's hoodies t-shirt</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half-outline"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$17.00</del>
                    <p className="price">$7.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/3.jpg"
                    alt="girls t-shirt"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">girls t-shirt</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half-outline"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$5.00</del>
                    <p className="price">$3.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/4.jpg"
                    alt="woolen hat for men"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">woolen hat for men</h4>
                  </a>
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <div className="price-box">
                    <del>$15.00</del>
                    <p className="price">$12.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withTranslation()(Sidebar);
