import React, { useState, useEffect} from "react";
import { withTranslation } from "react-i18next";
import Servives from "../../components/Test/Servives";
import url from "../../url.json";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
function Profile({ t }) {
  const [error, setError] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate=useNavigate()
  const handeSave = () => {
    const phoneNumber = document.getElementById("phone").value;
    const username = document.getElementById("fullname").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const data = {
      phoneNumber: phoneNumber,
      username: username,
      password: password,
      email: email,
    };
    console.log(data);
    if (phoneNumber=='' || username=='' || password=='' || email=='') {
      setError("Maydonni to'ldirish kerak !");
    }
    else {

      axios({
        method: "post",
        url: url.url + "auth/register",
        data: data,
      })
        .then(function (response) {
          if (response.data.success) {
            toast.success(response.data.message);
            setError()
            navigate("/login")
          } else {
            setError(response.data.message);
          }
          console.log(response.data.data);
        })
        .catch(function (response) {});
    }
  };
  return (
    <div className="container">
      <div>
        <div className="title">{t("Profile")}</div>
        <div className="form-wrap" style={{ justifyContent: "center" }}>
          <form className="form-prof" onSubmit={handeSave}>
            <div className="form-group">
              <h2 style={{ textAlign: "center" }}>{t("Sign up")}</h2>
              <input
                className="needclear"
                placeholder={t("Fullname")}
                type="text"
                id="fullname"
              />
              <input
                className="needclear"
                placeholder={t("Password")}
                type="password"
                id="password"
              />{" "}
              <input
                className="needclear"
                placeholder={t("Email")}
                type="email"
                id="email"
              />{" "}
              <input
                className="needclear"
                placeholder="Telefon raqam"
                type="phone"
                id="phone"
              />
              <i style={{ marginTop: 15, color: "red", fontSize: 14 }}>
                {error}
              </i>
              <button
                style={{ width: "100%" }}
                className="mt-5  buy_now_detail d-flex justify-content-center btn btn-danger "
                onClick={handeSave}
                type="button"
              >
                {t("Sign up")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withTranslation()(Profile);
