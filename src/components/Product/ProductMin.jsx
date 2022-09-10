import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import url from "../../url.json";
import { Spin, Empty } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fowaridReducer } from "../../Redux/Reducers/fowarid";
function ProductMin(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [product, setproduct] = useState();
  const filter = useSelector((state) => state.filter.value);
  const [fow, setFow] = useState();
  const [load, setLoad] = useState(false);
  function isfofarit(id, bol) {
    setFow(Math.random());
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("tokenProfile")}`;
    console.log(bol);
    if (bol == null) {
      axios({
        method: "post",
        url: url.url + `wishlist/${id}`,
      })
        .then(function (response) {
          axios({
            method: "get",
            url: url.url + "product/get",
          })
            .then((data) => {
              let count = 0;
              setproduct(data.data.data);
              for (let i = 0; i < data.data.data.length; i++) {
                if (data.data.data[i].isFavourite) {
                  count = count + 1;
                }
              }
              dispatch(fowaridReducer(count));
              setLoad(false);
            })
            .catch((error) => console.log(error));
        })
        .catch(function (response) {});
    } else {
      axios({
        method: "delete",
        url: url.url + `wishlist/${id}`,
      })
        .then(function (response) {
          axios({
            method: "get",
            url: url.url + "product/get",
          })
            .then((data) => {
              let count = 0;
              setproduct(data.data.data);
              for (let i = 0; i < data.data.data.length; i++) {
                if (data.data.data[i].isFavourite) {
                  count = count + 1;
                }
              }
              dispatch(fowaridReducer(count));
              setLoad(false);
            })
            .catch((error) => console.log(error));
        })
        .catch(function (response) {});
    }
  }
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
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("tokenProfile")}`;
      axios({
        method: "get",
        url: url.url + "product/get",
      })
        .then((data) => {
          let count = 0;
          setproduct(data.data.data);
          for (let i = 0; i < data.data.data.length; i++) {
            if (data.data.data[i].isFavourite) {
              count = count + 1;
            }
          }
          dispatch(fowaridReducer(count));
          setLoad(false);
        })
        .catch((error) => console.log(error));
    }
  }, [fow]);
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
          <Link className="ant-menu-title-content" to="/products">{t("Barchasi")}</Link>
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
                          <button
                            className="btn-action"
                            onClick={() => isfofarit(res.id, res.isFavourite)}
                          >
                            {res?.isFavourite ? (
                              <HeartFilled />
                            ) : (
                              <HeartOutlined />
                            )}
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
                          {res?.offPrice ? (
                            <del>
                              {res?.offPrice} {res?.currency}
                            </del>
                          ) : (
                            ""
                          )}
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
                        {res?.statusProduct == "OFF" ? (
                          <p className="showcase-badge angle pink">
                            {t("sale")}
                          </p>
                        ) : (
                          ""
                        )}

                        <div className="showcase-actions">
                          <button
                            className="btn-action"
                            onClick={() => isfofarit(res.id, res.isFavourite)}
                          >
                            {res?.isFavourite ? (
                              <HeartFilled />
                            ) : (
                              <HeartOutlined />
                            )}{" "}
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

                        <div className="price-box">
                          <p className="price">
                            {res?.price} {res?.currency}
                          </p>
                          {res?.offPrice ? (
                            <del>
                              {res?.offPrice} {res?.currency}
                            </del>
                          ) : (
                            ""
                          )}
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
