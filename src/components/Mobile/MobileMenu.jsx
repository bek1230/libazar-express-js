import React, { useState, useEffect } from "react";
import {
  TranslationOutlined,
  InfoCircleOutlined,
  DashboardOutlined,
  LoginOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { withTranslation } from "react-i18next";
import url from "../../url.json";
import LanRu from "../../assets/icons/ru.svg";
import LanUz from "../../assets/icons/uz.svg";
import { useDispatch } from "react-redux";
import { langReducer } from "../../Redux/Reducers/Lang/langReducer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MobileMenu(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = [
    getItem(t("Home"), "Home", <DashboardOutlined />),
    getItem(t("About"), "About", <InfoCircleOutlined />),
    getItem(t("Login"), "Login", <LoginOutlined />),

    getItem(
      t("Uz"),
      "Uz",
      <img src={LanUz} style={{ borderRadius: 8, width: 30, height: 30 }} />
    ),
    getItem(
      t("Ru"),
      "Ru",
      <img src={LanRu} style={{ borderRadius: 8, width: 30, height: 30 }} />
    ),
  ];
  const onClick = (e) => {
    if (e.key == "Home") {
      navigate("/");
    }
    if (e.key == "About") {
      navigate("/about");
    }
    if (e.key == "Login") {
      navigate("/login");
    }
    if (e.key == "Ru") {
      dispatch(langReducer("ru"));
      localStorage.setItem("lan", "ru");
    }
    if (e.key == "Uz") {
      dispatch(langReducer("uz"));

      localStorage.setItem("lan", "uz");
    }
    props.onclose();
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

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      mode="inline"
      items={items}
    />
  );
}
export default withTranslation()(MobileMenu);
