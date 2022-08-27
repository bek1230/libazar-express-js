import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { useTranslation, withTranslation } from "react-i18next";
import LanRu from "../../assets/icons/ru.svg";
import LanUz from "../../assets/icons/uz.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { langReducer } from "../../Redux/Reducers/Lang/langReducer";
function SelectLan() {
  const selectlan = useSelector((state) => state.langReducer);
  const { t, i18n } = useTranslation();
  const [Title, setTitle] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [icons, setIcons] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectlan.value == "uz") {
      setTitle("O'zbek");
      setIcons(LanUz);
      i18n.changeLanguage("uz");
    }
    if (selectlan.value == "ru") {
      setTitle("Русский");
      setIcons(LanRu);
      i18n.changeLanguage("ru");
    }
  }, [selectlan.value]);
  useEffect(() => {
    if (selectlan.value == "uz") {
      setTitle("O'zbek");
      setIcons(LanUz);
      i18n.changeLanguage("uz");
    }
    if (selectlan.value == "ru") {
      setTitle("Русский");
      setIcons(LanRu);
      i18n.changeLanguage("ru");
    }
  }, []);
  useEffect(() => {
    if (selectlan.value == "uz") {
      setTitle("O'zbek");
      setIcons(LanUz);
    }
    if (selectlan.value == "ru") {
      setTitle("Русский");
      setIcons(LanRu);
    }
  }, []);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      localStorage.setItem("lan", "uz");
      dispatch(langReducer("uz"));
      i18n.changeLanguage("uz");
      setTitle("O'zbek");
      setIcons(LanUz);
    }
    if (e.key === "2") {
      setTitle("Русский");
      localStorage.setItem("lan", "ru");
      dispatch(langReducer("ru"));
      i18n.changeLanguage("ru");
      setIcons(LanRu);
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: (
            <div className="lan-title">
              <img
                src={LanUz}
                style={{ borderRadius: 8, width: 30, height: 30 }}
              />
              <div>O'zbek</div>
            </div>
          ),
          key: "1",
        },
        {
          label: (
            <div className="lan-title">
              <img
                src={LanRu}
                style={{ borderRadius: 8, width: 30, height: 30 }}
              />
              <div>Русский</div>
            </div>
          ),
          key: "2",
        },
      ]}
    />
  );
  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <div className="lan-title">
        <img src={icons} style={{ borderRadius: 8, width: 30, height: 30 }} />
      <div className="p-lg-1">  {Title}</div>
      </div>
    </Dropdown>
  );
}
export default withTranslation()(SelectLan);
