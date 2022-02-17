import React from "react";
import "./Dashboard.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Displaybook from "../../components/displaybook/Displaybook";
import { CartService } from "../../Service/CartService";
import { WishlistService} from '../../Service/WishlistService'
function Dasboard() {

  const [quantity,setQuantity]=React.useState(0)
  const [wishquantity,setWishquantity]=React.useState(0)
  const [cart ,setCart]=React.useState([])
  const [wishlist,setWishlist] = React.useState([])
  
  const getCart = () =>{
    CartService.getcart().then((result)=>{
      console.log(result);
  setCart(result.data.data)
    })
  }
  
  
  
  
  return (
    <div>
      <div className="dashboard">
        <Header />
        <Displaybook cart={cart}  getCart={getCart}/>
        <Footer />
      </div>
    </div>
  );
}

export default Dasboard;
