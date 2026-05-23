import React from "react";
//import "./home.scss";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
const Home = () => {
  return (
    <div className="Home-page">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default Home;
