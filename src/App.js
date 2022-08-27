import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import "./assets/css/style-prefix.css";
import "./assets/js/script";
import { Suspense } from "react";
import "./i18n";
import OpenCard from "./pages/OpenCard/OpenCard";
import "./index.css";
import "./sass/main.scss";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Profile from "./pages/Profil/Profile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
      <Suspense fallback>
          <ToastContainer style={{ zIndex: 10000 }} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/opencard" element={<OpenCard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
      </Suspense>
  );
}

export default App;
