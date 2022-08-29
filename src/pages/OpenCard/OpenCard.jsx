import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { Carousel } from "antd";
import axios from "axios";
import Products from "../../components/Carusel/Products";
import "./styles.css";
import "./styless.scss";
import { withTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import url from "../../url.json";
import { Link } from "react-router-dom";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import { toast } from "react-toastify";
import SEO from "../../components/Seo";

function OpenCard({ t }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  // let id = searchParams.get("id");
  let id = searchParams.get("id").slice(0, 36);

  const [data, setData] = useState();
  const [resid, setresId] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState();
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("tokenProfile")}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: url.url + "auth/me",
    })
      .then(function (response) {
        if (response.data.success) setresId(response.data.data);
        else setresId();
      })
      .catch(function (response) {});
    fetch(url.url + `product/get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const handleSave = () => {
    let userId = searchParams.get("id").slice(-36);
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const data = {
      userId: userId ? userId : resid,
      productId: id,
      phoneNumber: phone,
      sellerName: fullname,
    };
    if (fullname != "" && phone != "") {
      axios({
        method: "post",
        url: url.url + "share/add",
        data: data,
      })
        .then(function (response) {
          if (response.data.success) {
            setError();
            toast.success("So'rovingiz qabul qilindi! Aloqaga chiqamiz!");
            navigate("/");
          } else {
            toast.error(response.data.data);
          }
          console.log(response.data.data);
        })
        .catch(function (response) {});
    } else {
      setError("Ma'lumotlar to'ldirilishi shart !");
    }
  };

  return (
    <div className="container ">
      <Modal
        title={t("order the product")}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <div className="open-wrapper">
        <div className="open-wrap-slid">
          <Carousel autoplay>
            {data?.imageUrls.map((res, i) => (
              <div className="carousel-div" key={i}>
                <img
                  src={res}
                  alt="Pure Garment Dyed Cotton Shirt"
                  className="product-img default"
                  style={{
                    width: "100%",
                    height: 450,
                    borderRadius: 10,
                    objectFit: "contain",
                  }}
                  width="100%"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="open-wrap-form">
          <div className="open-disc">
            <div className="prod-title">
              <h1 className="prod-name">{data?.name}</h1>
              <h2 className="prod-price">
                {data?.price} {data?.currency}
              </h2>
            </div>
            <div className="form-group">
              <input
                className="needclear"
                id="fullname"
                name="client_full_name"
                placeholder="Ismingiz"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                id="phone"
                className="needclear"
                name="client_full_name"
                placeholder="Telefon raqam"
                type="text"
              />
            </div>
            <i style={{ marginTop: 15, color: "red", fontSize: 14 }}>{error}</i>
            <button
              className="mt-5 width-sm-100 buy_now_detail d-flex justify-content-center btn btn-danger"
              onClick={handleSave}
            >
              {t("Buyrutma berish")}
            </button>
            <div className="preparer">
              Sotuvchi:<span className="name-prep">Rasulov Behzod</span>
            </div>
            <div className="preparer">{t("Baham ko'ring")}:</div>
            <div className="social-link">
              <div
                className="div-social"
                onClick={() => {
                  if (localStorage.getItem("tokenProfile"))
                    window.location.href = `http://www.facebook.com/sharer.php?u=https://libazar-express.herokuapp.com/openCard?id=${
                      data?.id + resid
                    }`;
                  else {
                    navigate("/login");
                  }
                }}
              >
                <img
                  className="img-social"
                  src="../../assets/icons/facebook.png"
                  style={{ width: 30 }}
                />
              </div>
              <div
                className="div-social"
                onClick={() => {
                  if (localStorage.getItem("tokenProfile"))
                    window.location.href = `https://www.instagram.com/?https://libazar-express.herokuapp.com/openCard?id=${
                      data?.id + resid
                    }`;
                  else {
                    navigate("/login");
                  }
                }}
              >
                <img
                  className="img-social"
                  src="../../assets/icons/instagram.png"
                  style={{ width: 30 }}
                />{" "}
              </div>
              <div
                onClick={() => {
                  if (localStorage.getItem("tokenProfile"))
                    window.location.href = `https://telegram.me/share/url?url=https://libazar-express.herokuapp.com/openCard?id=${
                      data?.id + resid
                    }`;
                  else {
                    navigate("/login");
                  }
                }}
                className="div-social"
              >
                <img
                  className="img-social"
                  src="../../assets/icons/telegram.png"
                  style={{ width: 30 }}
                />{" "}
              </div>
              <div className="div-social">
                <img
                  className="img-social"
                  src="../../assets/icons/twitter.png"
                  style={{ width: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="preparer" style={{ fontSize: 26 }}>
        {" "}
        {t("Description")} :
      </div>
      <div className="preparer-descrip">{data?.description}</div>
    </div>
  );
}
export default withTranslation()(OpenCard);
