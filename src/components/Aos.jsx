import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aos(props) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      // easing: "ease-in-sine",
      delay: 150,
    });
  }, []);
  return <div data-aos="fade-up">{props.children}</div>;
}
