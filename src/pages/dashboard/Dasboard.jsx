import React from "react";
import "./Dashboard.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Displaybook from "../../components/displaybook/Displaybook";

function Dasboard() {
  return (
    <div>
      <div className="dashboard">
        <Header />
        <Displaybook />
        <Footer />
      </div>
    </div>
  );
}

export default Dasboard;
