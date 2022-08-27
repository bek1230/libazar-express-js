import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import url from "../../url.json";
import { Spin, Empty } from "antd";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";
function ProductGrid() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [product, setproduct] = useState();
  const [load, setLoad] = useState(false);
  const [fow, setFow] = useState();
  function isfofarit(id, bol) {
    setFow(Math.random());
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("tokenProfile")}`;
    if (!bol) {
      axios({
        method: "post",
        url: url.url + `wishlist/${id}`,
      })
        .then(function (response) {
          console.log(response.data.data);
        })
        .catch(function (response) {});
    } else {
      axios({
        method: "delete",
        url: url.url + `wishlist/${id}`,
      })
        .then(function (response) {
          console.log(response.data.data);
        })
        .catch(function (response) {});
    }
  }
  useEffect(() => {
    setLoad(true);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("tokenProfile")}`;
    axios({
      method: "get",
      url: url.url + "product/get",
    })
      .then((data) => {
        setproduct(data.data.data);
        setLoad(false);
      })
      .catch((error) => console.log(error));
  }, [fow]);
  return (
    <div className="product-main">
      <h2 className="title">{t("New Products")}</h2>
      {load ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 500,
                backgroundColor: "white",
                borderRadius: 12,
              }}
            >
              <Spin tip={t("Loading...")} size="large" />
            </div>
          ) : (
      <div className="product-grid">
        {product?.map((res, i) =>
          res?.statusProduct == "NEW" ? (
            <div className="showcase" key={i}>
              <div className="showcase-banner">
                <img
                  src={res.imageUrls ? res.imageUrls[0] : ""}
                  alt="Mens Winter Leathers Jackets"
                  width="300"
                  className="product-img default"
                />
                <img
                  src={res.imageUrls[1] ? res.imageUrls[1] : res.imageUrls[0]}
                  alt="Mens Winter Leathers Jackets"
                  width="300"
                  className="product-img hover"
                />

                <p className="showcase-badge angle pink">{t("new")}</p>

                <div className="showcase-actions">
                  <button
                    className="btn-action"
                    onClick={() => isfofarit(res.id, res.isFavourite)}
                  >
                    {res?.isFavourite ? <HeartFilled /> : <HeartOutlined />}
                  </button>

                  <button
                    className="btn-action"
                    onClick={() =>
                      (window.location.href = `/openCard?id=${res.id}`)
                    }
                  >
                    <ion-icon name="eye-outline"></ion-icon>
                  </button>
                </div>
              </div>

              <div className="showcase-content">
                <a className="showcase-category">{res?.name}</a>

                <a>
                  <h3
                    className="showcase-title"
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {res?.description}
                  </h3>
                </a>

                <div className="showcase-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </div>

                <div className="price-box">
                  <p className="price">
                    {res?.price} {res?.currency}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>)}
    </div>
  );
}
export default withTranslation()(ProductGrid);
