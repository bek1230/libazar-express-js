import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Intro from "../../components/SiteIntro/Intro";

export default function Layout() {
  return (
    <div className="page-container">
      <Intro />
      <div className="site-header">
        <Header />
      </div>
      <div className="page-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
