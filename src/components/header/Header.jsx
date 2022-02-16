import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";
import bookimage from "../../Assets/education.png";

import "./Header.scss";

function Header(props) {

  const navigate = useNavigate();
  
  const cart = ()=>{
    navigate('/cart')
}

  
  return (
    <>
      {" "}
      <div className="homePage">
        <img className="image" src={bookimage} alt="this is book logo" />
        <p className="imagetitle">Bookstore</p>
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
        <div className="details-cart" onClick={()=>cart()}>
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
