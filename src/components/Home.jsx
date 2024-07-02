import React from "react";
import img from "../assets/img1.png";
import "./Home.scss";

function Home() {
  return (
    <div className="w-40 d-flex align-items-center justify-content-center">
      <img src={img} alt="ntg" className="head" />
    </div>
  );
}

export default Home;
