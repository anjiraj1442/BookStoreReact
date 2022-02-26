import React from "react";
import "./Displaybook.scss";
import bookimage from "../../Assets/book.png";
import { ProductService } from "../../Service/ProductService";
import { buttonClasses, getButtonBaseUtilityClass } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Pagination from "@mui/material/Pagination";

import { wishlistService } from "../../Service/WishlistService";
import Stack from "@mui/material/Stack";
import { CartService } from "../../Service/CartService";
import { display, width } from "@mui/system";

function Displaybook(props) {
  
  const [books, setBooks] = React.useState([]);
  const [msg, setMsg] = React.useState();

  React.useEffect(() => {
    // console.log(props.cart, "cart");
    props.getCart();///updating the ui
    getBooks();
    //  props.getwishlist();
  }, []);

  const getBooks = () => {
    ProductService.getAllproducts()
      .then((result) => {
        setBooks(result.data.data);
        // console.log("getting all books");
        // console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(books);
  const addCart = (book) => {
    let data = {
      _id: book._id,
      // bookName:book.bookName,
      // author:book.author,
      // price:book.price
    };
    // console.log(data);
    CartService.addtocart(book._id)
      .then((result) => {
        console.log(result.data.data, "add to cart");
        getBooks();
        props.getCart();
        setMsg(true);
      })
      .catch(() => {});
  };
  const wishlist = (book) => {
    let data = {
      _id: book._id,
    };
    wishlistService
      .addwishlist(book._id)
      .then(() => {
        getBooks();
        props.getwishlist();
        setMsg(false);
      })
      .catch(() => {});
  };

 
  const buttons = (book) => {
    let butn = "";
    const obj = props.cart.find((data) => data.bookId === book._id);
    console.log(obj);
    // console.log(props.cart);
    const wishl = props.wishlist.find((data) => data.bookId === book._id);

    console.log(wishl);
    // console.log(props.wishlist);

    if (obj) {
      butn = <button className="already-cart">Added to cart</button>;
    } else if (wishl) {
      butn = <button className="already-wishlist">Added to wishlist</button>;
    } else {
      butn = (
        <div className="buttn-grp">
          <div
            onClick={() => {
              addCart(book);
            }}
          >
            <React.Fragment>
              <Button
                className="cart-btn"
                sx={{ fontSize: "10px" }}
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "right",
                })}
              >
                Add to Cart
              </Button>
            </React.Fragment>
          </div>

          <div
            onClick={() => {
              wishlist(book);
            }}
          >
            <React.Fragment>
              <Button
                className="wishlist"
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "right",
                })}
              >
                WISHLIST
              </Button>
            </React.Fragment>
          </div>
        </div>
      );
    }
    return butn;
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <div className="book-containers">
        <p className="books" style={{ width: "1300px" }}>
          Books{" "}
        </p>
        {books.data ? <p className="item"> ({books.data.length})</p> : ""}

        <select name="sortbyrelevance" className="price">
          <option value="">Sort by relevance</option>
          <option value="">Price:Low to high</option>
          <option value="">Price:High to low</option>
          <option value="">Newest arrivals</option>
        </select>
      </div>

      <div className="map-containers">
        {books
          ? books.map((book, index) => {
              // console.log(book);
              return (
                <div className="books-display">
                  <div className="image-display">
                    <div>
                      <img className="image" src={bookimage}></img>
                    </div>
                  </div>
                  <div className="content">
                    <span className="book-name">{book.bookName}</span>
                    <br></br>
                    <span className="author">By {book.author}</span>
                    <div className="rate">
                      <span className="rating">4.5* </span>
                      <span className="text"> (20)</span>
                    </div>
                    <div className="pricebook">
                      <span className="">Rs:- {book.price}</span>
                    </div>

                    {buttons(book)}
                  </div>
                </div>
              );
            })
          : ""}
        <div></div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message={msg ? "Added to Cart" : "Added to Wishlist"}
          key={vertical + horizontal}
        />
      </div>
      <div className="paginationg">
        <Stack spacing={1}>
          <Pagination
            
          />
        </Stack>
      </div>
    </>
  );
}

export default Displaybook;
