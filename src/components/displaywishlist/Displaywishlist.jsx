import React from "react";
import Book from "../../Assets/book.png";
import "./Displaywishlist.scss";
import { ProductService } from "../../Service/ProductService";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Wishlist from "../../pages/wishlist/Wishlist";
import { CartService } from "../../Service/CartService";
function Displaywishlist(props) {
  console.log(props);
  React.useEffect(() => {
    props.getwishlist();
    // props.getBooks()
  }, []);

  const addtocart = (data) => {
    let data1 = {
      _id: data.bookId,
    };
    CartService.addtocart(data1)
      .then((result) => {
        console.log(result);
        props.getCart();
        props.getwishlist();
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  console.log(props.wishlist[0] ? props.wishlist[0].book : []);
 const whisbook= props.wishlist[0] ? props.wishlist[0].book : []
 console.log(props.wishquantity);
  return (
    <>
      <div className="displaywish-container">
        <div className="wishlist-heading">My Wishlist</div>
        <div className="wishlist">
          <div className="wish-head">Wishlist({props.wishquantity})</div>

          {whisbook.length
            ? props.wishlist[0].book.map((data) => {
                console.log(data);
                return (
                  <div className="book-detail">
                    <div className="book-det">
                      <img className="img" src={Book}></img>
                      <div className="book--name">
                        {data.bookName}
                        <div className="author--name"></div>
                        {data.author}
                      </div>
                      <div className="btn">
                        <div>
                          <button className="addcart-btn">
                            <ShoppingCartOutlinedIcon
                              onClick={() => {
                                addtocart(data);
                              }}
                            />
                          </button>
                        </div>
                        <div>
                          <button className="remove-wish">
                            <DeleteOutlinedIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default Displaywishlist;
