import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { CartService } from "../../Service/CartService";
import { wishlistService } from "../../Service/WishlistService";
import Displaywishlist from "../../components/displaywishlist/Displaywishlist";

function Wishlist() {
  const [wishquantity, setWishquantity] = React.useState(0);
  const [wishlist, setWishlist] = React.useState([]);
  const [quantity,setQuantity]=React.useState(0)
  React.useEffect(() => {
    getCart()
    getwishlist();
  }, []);

  const getwishlist = () => {
    wishlistService
      .getwishlist()
      .then((result) => {
        console.log(result.data.data[0].book.length);
        setWishquantity(result.data.data[0].book.length);
        setWishlist(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log("not getting", err);
      });
     
  };

  const getCart = ()=>{
    CartService.getcart().then((result)=>{
     setQuantity(result.data.data.length)
    }).catch((err)=>{
console.log("error", err)
    })
  }

  return (
    <div>
      <Header wishquantity={wishquantity} quantity={quantity} />
      <Displaywishlist
        wishlist={wishlist}
        getwishlist={getwishlist}
        wishquantity={wishquantity}
        getCart={getCart}
        wishquantity={wishquantity}
      />
      <Footer />
    </div>
  );
}

export default Wishlist;
