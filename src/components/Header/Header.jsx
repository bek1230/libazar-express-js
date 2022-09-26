import React, { useState, useEffect } from "react";
import { Button, Drawer, Radio, Space, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import MobileMenu from "../Mobile/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { openReducer } from "../../Redux/Reducers/MenuOpen/MenuOpen";
import SelectLan from "./SelectLan";
import { openCategoryReducer } from "../../Redux/Reducers/openCategory";
import Sidebar from "../Sidebar/Sidebar";
import DriverCategory from "../DriverCategory/DriverCategory";
import Profile from "../Profile/Profile";
import url from "../../url.json";
import { withTranslation } from "react-i18next";
import { filterReducer } from "../../Redux/Reducers/filter";
import { LogoutOutlined } from "@ant-design/icons";
import Logo from "../../assets/icons/libazar.svg";
function Header({ t }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visiblem, setVisiblem] = useState(false);
  const [visibless, setVisibless] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const fowarid = useSelector((state) => state.fowarid);
  const showModals = () => {
    setVisibless(true);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisibless(false);
  };
  const handleOk = () => {
    localStorage.clear();
    localStorage.removeItem("tokenProfile");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibless(false);
      setConfirmLoading(false);
      window.location.reload();
    }, 2000);
  };
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
      <Modal
        title={t("you are logout?")}
        visible={visibless}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      ></Modal>
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
                className="header-logo logos menu-title"
                style={{ marginRight: 5,alignItems: "center" }}
              >
                <img className="menu-title" src={Logo} alt="Anon's logo" />
                {/* <h3 className="menu-title" style={{color:"#000",fontWeight:600}}>LIBAZAR</h3> */}
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
              {localStorage.getItem("tokenProfile") ? (
                <button className="action-btn" onClick={showModals}>
                  <ion-icon name="person-outline"></ion-icon>
                </button>
              ) : (
                <button
                  className="action-btn"
                  onClick={() => navigate("/profile")}
                >
                  <ion-icon name="person-outline"></ion-icon>
                </button>
              )}

              <button
                className="action-btn"
                onClick={() => navigate("/fowarids")}
              >
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">{fowarid.value}</span>
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
            {localStorage.getItem("tokenProfile") ? (
              <li className="menu-category">
                <Link to="/list" className="menu-title">
                  {t("Client list")}
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="menu-category">
              <Link to="/login" className="menu-title">
                {t("Login")}
              </Link>
            </li>
            <li className="menu-category">
              <Link to="/profile" className="menu-title">
                {t("Sign up")}
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
        {localStorage.getItem("tokenProfile") ? (
          <button className="action-btn" onClick={showModals}>
            <ion-icon name="person-outline"></ion-icon>
          </button>
        ) : (
          <button className="action-btn" onClick={() => navigate("/profile")}>
            <ion-icon name="person-outline"></ion-icon>
          </button>
        )}

        <button className="action-btn" onClick={() => navigate("/")}>
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button className="action-btn" onClick={() => navigate("/fowarids")}>
          <ion-icon name="heart-outline"></ion-icon>

          <span className="count">{fowarid.value}</span>
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
