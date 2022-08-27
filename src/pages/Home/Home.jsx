import React,{useEffect} from "react";
import Blog from "../../components/Blog/Blog";
import Carusel from "../../components/Carusel/Carusel";
import Category from "../../components/Category/Category";
import Category2 from "../../components/Category/Category2";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
import Servives from "../../components/Test/Servives";
import Trande from "../../components/Trande/Trande";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div >
      {/* <Hero /> */}
      {/* <Carusel /> */}
      <Category />
      {/* <Category2 /> */}
      <Product />
      <Servives />
      {/* <Blog/> */}
    </div>
  );
}
