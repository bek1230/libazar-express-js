import React, { useState, useEffect } from "react";
import "./styles.css";
import phone from "../../assets/icons/phone.png";
import casmetic from "../../assets/icons/cosmetics.png";
import home from "../../assets/icons/dom.png";
import gift from "../../assets/icons/gift.png";
import { withTranslation } from "react-i18next";
import url from "../../url.json";
import { Link } from "react-router-dom";
function Category({ t }) {
  const [category, setCategory] = useState();
  useEffect(() => {
    fetch(url.url + "category/get")
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="siteCategories  pb-3">
      <div className="container">
        <div className="row" style={{margin: "auto",}}>
          {category?.map((res, i) => (
            <div className="col-md-2 col-4 mt-1" key={i}>
              <Link className="link-item"  to={{
                        pathname: "/products",
                        search: `?id=${res.id}`,
                      }}>
                <div>
                  {res.name}
                </div>

                <div
                  className="cat-icon"
                  style={{
                    backgroundColor: "hsl(353, 100%, 87%)",
                  }}
                >
                  <img
                    src={res.imageUrl}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default withTranslation()(Category);
