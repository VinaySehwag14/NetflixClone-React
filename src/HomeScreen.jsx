import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import "./homeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner />

      {/* Row */}
    </div>
  );
};

export default HomeScreen;
