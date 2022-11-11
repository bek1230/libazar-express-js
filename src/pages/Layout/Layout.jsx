import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Intro from "../../components/SiteIntro/Intro";

export default function Layout() {
  return (
    <div className="page-container">
      <Intro />
      <header className="site-header">
        <Header />
      </header>
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
