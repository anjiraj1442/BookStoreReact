import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Homepage.scss";
import order from "../../Assets/order.jpg";
import order2 from "../../Assets/order1.jpg";
import { useNavigate } from "react-router";
export default function Homepage() {
  const navigate = useNavigate();
  const navDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="header">
      <Header />
      <div className="body_content">
        <div className="section-1">
          <div className="image1">
            <img src={order} alt="image1" />
          </div>
          <h2 className="conts1">Order Placed Successfully</h2>
          <div className="image2">
            <img src={order2} alt="image2" />
          </div>
          <div className="const2">
            <div className="text_content1">
              hurry!!! your order is confirmed
            </div>
            <div>the order id is #123456 save the order id for</div>
            <div className="text_content2">further communication..</div>
          </div>
        </div>
        <div className="section-2">
          <div className="contents1">
            <div className="email">Email us</div>
            <div className="contact">Contact us</div>
            <div className="Address">Address</div>
          </div>
          <div className="contents2">
            <div className="email_d">admin@bookstore.com</div>
            <div className="contact_d">+91 8163475881</div>
            <div className="Address_d">
              42/14-salem hyderabad uppal near ringrode
            </div>
          </div>
        </div>
        <div className="section-3">
          <button className="buttonq" onClick={() => navDashboard()}>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
