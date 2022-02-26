import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Displaycart from "../../components/displaycart/Displaycart";
import { CartService } from "../../Service/CartService";
import "./Cart.css";
import { wishlistService } from "../../Service/WishlistService";
export default function Cart() {
  const [quantity, setQuantity] = React.useState(0);
  const [cart, setcart] = React.useState(0);
  const [wishquantity, setWishquantity] = React.useState(0);
  const [wishlist, setWishlist] = React.useState([]);
  React.useEffect(() => {
    getCart();
    getwishlist();
  }, []);
  const getCart = () => {
    CartService.getcart()
      .then((result) => {
        console.log(result);

        setQuantity(result.data.data.lenght);
        setcart(result.data.data.book);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getwishlist = () => {
    wishlistService
      .getwishlist()
      .then((result) => {
        var i = 0;
        result.data.data.map((data) => {
          i = i + data.quantity;
        });
        setWishquantity(i);
      })
      .catch(() => {});
  };

  return (
    <div className="cart">
      <Header quantity={quantity} wishquantity={wishquantity} />
      <Displaycart cart={cart} quantity={quantity} getCart={getCart} />
      <Footer />
    </div>
  );
}
