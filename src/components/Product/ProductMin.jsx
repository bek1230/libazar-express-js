import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import url from "../../url.json";
import { Spin, Empty } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
function ProductMin(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [product, setproduct] = useState();
  const filter = useSelector((state) => state.filter.value);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    if (props.id) {
      fetch(url.url + `category/get/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          setproduct(data.data?.products);
          setLoad(false);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(url.url + "product/get")
        .then((res) => res.json())
        .then((data) => {
          setproduct(data.data);
          setLoad(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);
  if (product?.length > 0)
    return (
      <div className="product-main">
        <div
          className="title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 0,
          }}
        >
          <div>{t("Products")}</div>
          <Link to="/products">{t("Barchasi")}</Link>
        </div>
        <div>
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
              {filter
                ? filter?.map((res, i) => (
                    <div className="showcase" key={i}>
                      <div className="showcase-banner">
                        <img
                          src={res.imageUrls ? res.imageUrls[0] : ""}
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img default"
                        />
                        <img
                          src={
                            res.imageUrls[1]
                              ? res.imageUrls[1]
                              : res.imageUrls[0]
                          }
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img hover"
                        />

                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>

                          <button
                            className="btn-action"
                            onClick={() => {
                              navigate({
                                pathname: "/openCard",
                                search: `?id=${res.id}`,
                              });
                            }}
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

                        {/* <div className="showcase-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                          <ion-icon name="star-outline"></ion-icon>
                        </div> */}

                        <div className="price-box">
                          <p className="price">
                            {res?.price} {res?.currency}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : product?.map((res, i) => (
                    <div className="showcase" key={i}>
                      <div className="showcase-banner">
                        <img
                          src={res.imageUrls ? res.imageUrls[0] : ""}
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img default"
                        />
                        <img
                          src={
                            res.imageUrls[1]
                              ? res.imageUrls[1]
                              : res.imageUrls[0]
                          }
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img hover"
                        />
                        {res?.statusProduct=="OFF"?
                        <p className="showcase-badge angle pink">{t("sale")}</p>:""}

                        <div className="showcase-actions">
                          <button className="btn-action">
                            <ion-icon name="heart-outline"></ion-icon>
                          </button>

                          <button
                            className="btn-action"
                            onClick={() => {
                              navigate({
                                pathname: "/openCard",
                                search: `?id=${res.id}`,
                              });
                            }}
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

                        <div className="price-box">
                          <p className="price">
                            {res?.price} {res?.currency}
                          </p>
                          {res?.statusProduct=="OFF"?<del>{res?.offPrice} {res?.currency}</del>:""}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
      </div>
    );
  else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 500,
          backgroundColor: "white",
          borderRadius: 15,
        }}
      >
        <Empty description={t("No data")} />
      </div>
    );
  }
}
export default withTranslation()(ProductMin);
