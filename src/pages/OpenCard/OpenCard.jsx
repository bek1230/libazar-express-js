import React, { useState, useEffect } from "react";
import { Button, Modal, Spin } from "antd";
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
import Youtube from "../../components/Youtube/Youtube";
import { CloseOutlined } from "@ant-design/icons";
function OpenCard({ t }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  // let id = searchParams.get("id");
  let id = searchParams.get("id").slice(0, 6);

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
    let userId = searchParams.get("id").slice(-6);
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const region = document.getElementById("region").value;
    const data = {
      userId: userId ? userId : resid,
      productId: id,
      phoneNumber: phone,
      sellerName: fullname,
      region: region,
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
            window.scrollTo(0, 0);

            toast.success("So'rovingiz qabul qilindi! Aloqaga chiqamiz!");
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
  const [open, setopen] = useState(false);

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
      {open ? (
        <div className="fancybox-containe">
          <Youtube url={data?.urlVideo} />

          <div
            className="fancybox-toolbar"
            style={{ fontSize: 30, cursor: "pointer" }}
            onClick={() => setopen(false)}
          >
            {" "}
            <CloseOutlined style={{ color: "rgb(233, 69, 96)" }} />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="open-wrapper">
        <div className="open-wrap-slid">
          <div className="img_block">
            {data?.imageUrls[0] ? (
              <Carousel autoplay>
                {data?.imageUrls.map((res, i) => (
                  <div className="carousel-div" key={i}>
                    <img
                      src={res}
                      alt="Pure Garment Dyed Cotton Shirt"
                      style={{
                        width: "100%",
                        height: 400,
                        borderRadius: 10,
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Spin />{" "}
              </div>
            )}
            {data?.urlVideo ? (
              <div
                className="play"
                onClick={() => setopen(true)}
                style={{ cursor: "pointer" }}
              ></div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="open-wrap-form">
          <div className="open-disc">
            <div className="prod-title">
              <h1 className="prod-name">{data?.name}</h1>
              <h2 className="prod-price" >
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
            <div className="form-group">
              <select
                style={{ width: "100%" }}
                id="region"
                className="needclear"
                type="select"
              >
                <option name="Toshkent shahar">Toshkent shahar</option>

                <option name="Qoraqalpog‘iston Respublikasi">
                  Qoraqalpog‘iston Respublikasi
                </option>
                <option name="Andijon viloyati">Andijon viloyati</option>
                <option name="Buxoro viloyati">Buxoro viloyati</option>
                <option name="Jizzax viloyati">Jizzax viloyati</option>
                <option name="Qashqadaryo viloyati">
                  Qashqadaryo viloyati
                </option>
                <option name="Navoiy viloyati">Navoiy viloyati</option>
                <option name="Namangan viloyati">Namangan viloyati</option>
                <option name="Samarqand viloyati">Samarqand viloyati</option>
                <option name="Surxondaryo viloyati">
                  Surxondaryo viloyati
                </option>
                <option name="Sirdaryo viloyati">Sirdaryo viloyati</option>
                <option name="Toshkent viloyati">Toshkent viloyati</option>
                <option name="Farg'ona viloyati">Farg'ona viloyati</option>
                <option name="Xorazim viloyati">Xorazim viloyati</option>
              </select>
            </div>
            <i style={{ marginTop: 15, color: "red", fontSize: 14 }}>{error}</i>
            <button
              className="mt-5 width-sm-100 buy_now_detail d-flex justify-content-center btn btn-danger"
              onClick={handleSave}
            >
              {t("Buyrutma berish")}
            </button>
            <div className="preparer">
              Sotuvchi:<span className="name-prep">Libazar admin</span>
            </div>
            <div className="preparer">{t("Baham ko'ring")}:</div>
            <div className="social-link">
              <div
                className="div-social"
                onClick={() => {
                  if (localStorage.getItem("tokenProfile"))
                    window.location.href = `http://www.facebook.com/sharer.php?u=http://libazar.uz/openCard?id=${
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
                    window.location.href = `https://www.instagram.com/?http://libazar.uz/openCard?id=${
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
                    window.location.href = `https://telegram.me/share/url?url=http://libazar.uz/openCard?id=${
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
