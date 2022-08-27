import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ProductMin from "./ProductMin";
import ProductGrid from "./ProductGrid";
import ProductFeat from "./ProductFeat";

export default function Product() {
  return (
    <div className="product-container ">
      <div className="container ">
        <Sidebar />
        <div className="product-box">
          <ProductMin />
          {/* <ProductFeat /> */}
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
