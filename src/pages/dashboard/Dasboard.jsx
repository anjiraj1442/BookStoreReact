import React from "react";
import "./Dashboard.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Displaybook from "../../components/displaybook/Displaybook";
import { CartService } from "../../Service/CartService";
import { wishlistService } from "../../Service/WishlistService";
function Dasboard() {
  const [quantity, setQuantity] = React.useState(0);
  const [wishquantity, setWishquantity] = React.useState(0);
  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);

  const getCart = () => {
    CartService.getcart()
      .then((result) => {
        console.log(result.data.data.book);
        setCart(result.data.data.book);

        var i = 0;
        cart.map((data) => {
          i = i + data.quantity;
        });
        setQuantity(i);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getwishlist = () => {
    wishlistService
      .getwishlist()
      .then((result) => {
        console.log(result);
        setWishlist(result.data.data);

        var i = 0;
        wishlist.map((data) => {
          i = i + data.wishquantity;
        });

        setWishquantity(i);

        console.log(result.data.data, "wishlist");
      })
      .catch((err) => {
        console.log("not getting", err);
      });
  };

  return (
    <div>
      <div className="dashboard">
        <Header quantity={quantity} wishquantity={wishquantity} />
        <Displaybook
          cart={cart}
          wishlist={wishlist}
          getCart={getCart}
          getwishlist={getwishlist}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Dasboard;
