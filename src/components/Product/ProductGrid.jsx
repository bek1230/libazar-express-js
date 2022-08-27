import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import url from "../../url.json";
function ProductGrid() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [product, setproduct] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    fetch(url.url + "product/get")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data.data);
        setLoad(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="product-main">
      <h2 className="title">{t("New Products")}</h2>

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
                  <button className="btn-action">
                    <ion-icon name="heart-outline"></ion-icon>
                  </button>

                  <button
                    className="btn-action"
                    onClick={()=>window.location.href=`/openCard?id=${res.id}`}
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
      </div>
    </div>
  );
}
export default withTranslation()(ProductGrid);
