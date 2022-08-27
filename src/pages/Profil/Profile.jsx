import React from "react";
import { withTranslation } from "react-i18next";
import Servives from "../../components/Test/Servives";

function Profile({ t }) {
  return (
    <div className="container">
      <div>
        <div className="title">{t("Profile")}</div>
        <div className="form-wrap" style={{ justifyContent: "center" }}>
          <form className="form-prof">
            <div className="form-group">
              <input
                className="needclear"
                name="client_full_name"
                placeholder="Telefon raqam"
                type="text"
              />
              <button
              className="mt-5 width-sm-100 buy_now_detail d-flex justify-content-center btn btn-danger"
              // onClick={showModal}
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
