import React, { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { withTranslation } from "react-i18next";
import url from "../../url.json";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function DriverCategory(props) {
  const { t } = useTranslation();
  const [category, setCategory] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(url.url + "category/get")
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((error) => console.log(error));
  }, []);
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
  const onClick = (e) => {
    category?.map((res) => {
      if (res.id == e.key) {
        // navigate({
        //   pathname:'products',
        //   search:`?id=${res.id}`
        // })
        window.location.href = `/products?id=${res.id}`;
      }
    });
    props.onClose();
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
      items={ItemsCat()}
    />
  );
}
export default withTranslation()(DriverCategory);
