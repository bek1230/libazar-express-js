import React, { useState, useEffect } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import MobileMenu from "../Mobile/MobileMenu";
import { useDispatch } from "react-redux";
import { openReducer } from "../../Redux/Reducers/MenuOpen/MenuOpen";
import SelectLan from "./SelectLan";
import { openCategoryReducer } from "../../Redux/Reducers/openCategory";
import Sidebar from "../Sidebar/Sidebar";
import DriverCategory from "../DriverCategory/DriverCategory";
import Profile from "../Profile/Profile";
import url from "../../url.json";
import { withTranslation } from "react-i18next";
import { filterReducer } from "../../Redux/Reducers/filter";
function Header({ t }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visiblem, setVisiblem] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClosem = () => {
    setVisiblem(false);
  };
  const showDrawerm = () => {
    setVisiblem(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-main");
    const scrollTop = window.scrollY;
    scrollTop >= 50
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  const [visibles, setVisibles] = useState(false);
  const [product, setproduct] = useState();
  const showDrawers = () => {
    setVisibles(true);
  };

  const onCloses = () => {
    setVisibles(false);
  };
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch(url.url + "product/get")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data.data);
      })
      .catch((error) => console.log(error));
    fetch(url.url + "category/get")
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = product?.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputText);
    }
  });
  useEffect(() => {
    dispatch(filterReducer(filteredData));
  }, [inputText]);
  return (
    <header>
      <Profile
        showDrawers={showDrawers}
        onCloses={onCloses}
        visibles={visibles}
      />
      <div className="header-holder">
        <div className="header-main">
          <div className="container">
            <div className="header-inp">
              <Link
                to="/"
                className="header-logo logos"
                style={{ marginRight: 5 }}
              >
                <img
                  src="../../assets/images/logo/logo.png"
                  alt="Anon's logo"
                  width="80"
                  height="40"
                />
              </Link>

              <div className="header-search-container search-inp">
                <input
                  onChange={inputHandler}
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder={t("Enter your product name...")}
                />

                <button className="search-btn">
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div className="header-user-actions">
              <button
                className="action-btn"
                onClick={() => navigate("/profile")}
              >
                <ion-icon name="person-outline"></ion-icon>
              </button>

              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to="/" className="menu-title">
                {t("Home")}
              </Link>
            </li>

            <li className="menu-category">
              <Link to="/" className="menu-title">
                {t("Categories")}
              </Link>

              <div className="dropdown-panel">
                {category?.map((res, i) => (
                  <ul className="dropdown-panel-list" key={i}>
                    <li
                      className="menu-title"
                      onClick={() =>
                        (window.location.href = `/products?id=${res.id}`)
                      }
                    >
                      <a>{res.name}</a>
                    </li>
                    {res.products?.map((item, i) => (
                      <li
                        className="panel-list-item"
                        key={i}
                        onClick={() =>
                          (window.location.href = `/openCard?id=${item.id}`)
                        }
                      >
                        <a>{item.name}</a>
                      </li>
                    ))}

                    <li className="panel-list-item">
                      <a>
                        <img
                          src={res.imageUrl}
                          alt="headphone collection"
                          style={{
                            width: "100px",
                            height: "120px",
                            objectFit: "contain",
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </li>

            <li className="menu-category">
              <Link to="/about" className="menu-title">
                {t("About")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-navigation ">
        <button
          className="action-btn"
          data-mobile-menu-open-btn
          onClick={() => {
            showDrawerm();
            dispatch(openReducer("active"));
          }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button className="action-btn" onClick={() => navigate("/")}>
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">0</span>
        </button>

        <button
          className="action-btn"
          onClick={() => {
            showDrawer();
            dispatch(openCategoryReducer("active"));
          }}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>
      <Drawer
        width={256}
        title={t("Menu")}
        placement="left"
        closable={true}
        onClose={onClosem}
        visible={visiblem}
        key="left2"
      >
        <MobileMenu onclose={onClosem} />
      </Drawer>
      <Drawer
        width={256}
        title={t("Category")}
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        key="left"
      >
        <DriverCategory onClose={onClose} />
      </Drawer>
    </header>
  );
}
export default withTranslation()(Header);
