import React, { useEffect, useState } from "react";
import "./List.scss";
import url from "../../url.json";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

import { createSearchParams, useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import axios from "axios";
import dateFormat from "dateformat";
import { Empty } from "antd";
import "antd/dist/antd.css";
import { Button, Dropdown, Menu } from "antd";
import { Spin, Pagination } from "antd";

function List({ t }) {
  const [shows, setShows] = useState(false);
  const [datares, setDatares] = useState();
  const [resId, setresId] = useState();

  const navigate = useNavigate();
  const [datas, setData] = useState();
  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("tokenProfile")}`;
    axios({
      method: "get",
      url: url.url + "auth/me",
    }).then(function (response) {
      if (response.data.success) {
        axios
          .get(url.url + `auth/get-data-with-id?userId=${response.data.data}`)
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err) => {});
      }
    });
  }, []);

  return (
    <>
      {datas ? (
        <div className="resp table-responsive"                 style={{marginLeft:10,marginRight:10}}
>
          {datas?.length > 0 ? (
            <div>
              <Table
                className="tttt"
                responsive="sm"
                style={{ backgroundColor: "white"}}
              >
                <thead>
                  <tr>
                    <th className="thh">#</th>
                    <th className="thh">{t("Name")}</th>
                    <th className="thh">{t("Region")}</th>
                    <th className="thh">{t("Phone")}</th>
                    <th className="thh">{t("Status")}</th>
                    <th className="thh thh-date">{t("Date")}</th>
                  </tr>
                </thead>
                <tbody>
                  {datas?.map((res, i) => (
                    <tr key={i}>
                      <td className="tdd">{i + 1}</td>
                      <td className="tdd">{res?.sellerName}</td>
                      <td className="tdd">
                        <p className="tdd-app">{res?.region}</p>
                      </td>
                      <td className="tdd tdd-app">{res?.phoneNumber}</td>

                      <td className="tdd">
                        <div className={`btn out btn-outline-primary `}>
                          {res.statusCall=="ON_HOLD"?"bog'lanilmadi":res.statusCall=="REJECTED"?"olmadi":"oldi"}
                        </div>
                      </td>
                        {/* {res.certificate ? (
                          <Button
                            className="btnnn"
                            type="primary"
                            shape="round"
                            icon={<FileDownloadOutlinedIcon />}
                            size={12}
                            onClick={() =>
                              (window.location.href = res.certificate?.file)
                            }
                          >
                            {t("Download")}
                          </Button>
                        ) : (
                          <Button
                            className="btnnn"
                            type="primary"
                            shape="round"
                            disabled
                            icon={<FileDownloadOutlinedIcon />}
                            size={12}
                          >
                            {t("Download")}
                          </Button>
                        )} */}
                      <td className="tdd tdd-date">
                        {dateFormat(res?.createdAt, "dd.mm.yyyy")}
                      </td>
                      {/* <td className="tdd">
                        <Dropdown
                          overlay={menu(res)}
                          placement="bottomRight"
                          trigger={["click"]}
                        >
                          <i className="header-list__icon bx bx-dots-vertical-rounded"></i>
                        </Dropdown>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 500,
                backgroundColor: "white",
                borderRadius: 12,
              }}
            >
              <Empty description={t("No data")} />
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 500,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        >
            <Empty description={t("No data")} />
        </div>
      )}
    </>
  );
}

export default withTranslation()(List);
