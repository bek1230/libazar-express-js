import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import url from "../../url.json";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login({ t }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [error, setError] = useState();
  const handeSave = () => {
    const username = document.getElementById("fullname").value;
    const password = document.getElementById("password").value;
    const data = {
      username: username,
      password: password,
    };
    if (username == "" || password == "") {
      setError("Maydonni to'ldirish kerak !");
    } else {
      axios({
        method: "post",
        url: url.url + "auth/login",
        data: data,
      })
        .then(function (response) {
          if (response.data.success) {
            toast.success(response.data.message);
            setError();
            localStorage.setItem("tokenProfile", response.data.data);
            navigate("/");
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
        <div className="title">{t("Login")}</div>
        <div className="form-wrap" style={{ justifyContent: "center" }}>
          <form className="form-prof" onSubmit={handeSave}>
            <div className="form-group">
              <h2 style={{ textAlign: "center" }}>{t("Login")}</h2>
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
              <i style={{ marginTop: 15, color: "red", fontSize: 14 }}>
                {error}
              </i>
              <button
                style={{ width: "100%" }}
                className="mt-5  buy_now_detail d-flex justify-content-center btn btn-danger "
                onClick={handeSave}
                type="button"
              >
                {t("Login")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default withTranslation()(Login);
