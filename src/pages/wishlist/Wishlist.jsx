import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { CartService } from "../../Service/CartService";
import { wishlistService } from "../../Service/WishlistService";
import Displaywishlist from "../../components/displaywishlist/Displaywishlist";

function Wishlist() {
  const [wishquantity, setWishquantity] = React.useState(0);
  const [wishlist, setWishlist] = React.useState([]);

  React.useEffect(() => {
    getwishlist();
  }, []);

  const getwishlist = () => {
    wishlistService
      .getwishlist()
      .then((result) => {
        console.log(result);
        setWishquantity(result.data.data.length);
        setWishlist(result.data.data);
        console.log(result.data.data);
      })
      .catch(() => {
        console.log("not getting");
      });
  };

  return (
    <div>
      <Header wishquantity={wishquantity} />
      <Displaywishlist
        wishlist={wishlist}
        getwishlist={getwishlist}
        wishquantity={wishquantity}
      />
      <Footer />
    </div>
  );
}

export default Wishlist;
