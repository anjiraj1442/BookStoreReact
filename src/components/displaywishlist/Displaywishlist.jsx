import React from "react";
import Book from "../../Assets/book.png";
import "./Displaywishlist.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Displaywishlist() {
  return (
    <div className="totalcontainer">
      <div className="button">
        <button className="button_style">Home</button>
        <h6>/</h6>
        <button className="button_style">My Wishlist</button>
      </div>
      <div className="my-cart">
        <h3>My Wishlist (02)</h3>
      </div>
      <div className="wishlist_summary">
        <div>
          <div className="content-container">
            <img className="image_style" src={Book} alt="image" />
            <div className="cart-description">
              <div className="bookname">Don't Make Me Think</div>
              <div className="authorname">by Steve Krug</div>
              <div className="bookprice">Rs. 1500</div>
            </div>
            <div className="icons">
              <ShoppingCartOutlinedIcon />
              <DeleteOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Displaywishlist;
