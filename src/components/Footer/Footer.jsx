import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import {Link,useNavigate} from 'react-router-dom'
import url from "../../url.json";
function Footer({ t }) {
  const [category, setCategory] = useState();
  const [product, setproduct] = useState();
const navigate=useNavigate()
  useEffect(() => {
    fetch(url.url + "product/get")
      .then((res) => res.json())
      .then((data) => {
        const dat=data.data.slice(0,4)
        setproduct(dat);
      })
      .catch((error) => console.log(error));
    fetch(url.url + "category/get")
      .then((res) => res.json())
      .then((data) => setCategory(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <footer>
      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">{t("Popular Categories")}</h2>
            </li>
            {category?.map((res, i) => (
              <li className="footer-nav-item" key={i} onClick={()=> navigate({
                            pathname: "products",
                            search: `?id=${res.id}`,
                          })
              // window.location.href=`/products?id=${res.id}`
              }>
                <div
style={{cursor: 'pointer'}}
                  className="footer-nav-link"
                >
                  {res?.name}
                </div>
              </li>
            ))}
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">{t("Products")}</h2>
            </li>
{product?.map((res) =>(
            <li className="footer-nav-item" key={res.id} onClick={()=>
             navigate({
                            pathname: "openCard",
                            search: `?id=${res.id}`,
                          })}
            // window.location.href=`/openCard?id=${res.id}`}
            >
              <div style={{cursor: 'pointer'}}  className="footer-nav-link">
                {res?.name}
              </div>
            </li>
            ))}

          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Biz bilan aloqa</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="footer-nav-link">
                Afrosiyob ko'chasi 12-uy
              </div>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a href="tel:+98935953833" className="footer-nav-link">
                (93) 5953833
              </a>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="mailto:example@gmail.com" className="footer-nav-link">
               libazar@inbox.ru
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul className="social-link">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <img
            src="./assets/images/payment.png"
            alt="payment method"
            className="payment-img"
          />

          <p className="copyright">
            Copyright &copy; <a href="#">Anon</a> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default withTranslation()(Footer);
