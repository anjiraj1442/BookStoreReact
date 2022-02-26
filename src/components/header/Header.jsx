import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import bookimage from "../../Assets/education.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Header.scss";

function Header(props) {
  const navigate = useNavigate();

  const cart = () => {
    navigate("/cart");
  };

  const homepage = () => {
    navigate("/dashboard");
  };

  const wish = () => {
    navigate("/wishlist");
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {" "}
      <div className="homePage">
        <img
          className="image"
          src={bookimage}
          alt="this is book logo"
          onClick={() => homepage()}
        />
        <p className="imagetitle" onClick={() => homepage()}>
          Bookstore
        </p>
        <div className="searchbar">
          <SearchOutlinedIcon htmlColor="grey" />
          <input
            type="search"
            className="search"
            placeholder="Search..."
          ></input>
        </div>
        <div className="details">
          <div className="icon">
            <PermIdentityTwoToneIcon htmlColor="white" />
          </div>
          <div className="person">Anji Raj</div>
        </div>
        <div className="wishd" onClick={() => wish()}>
          <div className="wishdetails">
            <div>
              <Badge
                badgeContent={props.wishlist}
                color="primary"
                sx={({ color: "#ffffff" }, { background: "#A03037" })}
              >
                <FavoriteBorderOutlinedIcon htmlColor="white" />
              </Badge>
            </div>
          </div>
          <div className="wish">Wishlist</div>
        </div>

        <div className="details-cart" onClick={() => cart()}>
          <div className="">
            <Badge badgeContent={props.quantity} color="primary">
              <ShoppingCartOutlinedIcon htmlColor="white" />
            </Badge>
          </div>
          <div className="cart">Cart</div>
        </div>
      </div>
    </>
  );
}

export default Header;
