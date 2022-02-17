import React from "react";
import "./Displaycart.scss";
import { CartService } from "../../Service/CartService";
import bookimage from "../../Assets/book.png";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import RadioGroup from "@mui/material/RadioGroup";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Displaycart(props) {
  const [book, setBooks] = React.useState([]);
  React.useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    CartService.getcart()
      .then((result) => {
        console.log(result);
        setBooks(result.data.data.book);
        console.log("getting all cat books",result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(book);

  return (
    <>
      <div className="maincontainer">
        <h3 className="headpart"> Home/My cart</h3>
        <div className="cartcontainer">
          <h3 className="mycart"> My Cart</h3>
          {book.map((books) => {
            return (
              <div>
                <div className="content-container">
                  <div className="image-cart">
                    <img
                      src={bookimage}
                      alt="image"
                      style={({ height: "105px" }, { width: "100 px" })}
                    />
                  </div>
                  <div className="cart-description">
                    <div className="book-nam">{books.bookName}</div>
                    <div className="author-nam">{books.author}</div>
                    <div className="pricetage">{books.price}</div>
                  </div>
                </div>
                <div className="update-cart">
                  <RemoveCircleOutlineOutlinedIcon
                    htmlColor="grey"
                    onClick={() => {}}
                  />
                  <div className="cart-quantity">{books.quantity}</div>
                  <AddCircleOutlineOutlinedIcon
                    htmlColor="grey"
                    onClick={() => {}}
                  />
                  <div className="remove">Remove</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
