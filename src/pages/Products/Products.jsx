import React from "react";
import { withTranslation } from "react-i18next";
import ProductMin from "../../components/Product/ProductMin";
import { useSearchParams } from "react-router-dom";

function Products({ t }) {
  let [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("id");

  return (
    <div className="container">
      <ProductMin id={id} />
    </div>
  );
}
export default withTranslation()(Products);
