import React from "react";
import "./Displaybook.scss";
import bookimage from "../../Assets/book.png";
import { ProductService } from "../../Service/ProductService";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { wishlistService } from "../../Service/WishlistService";
import { CartService } from "../../Service/CartService";
function Displaybook(props) {
  const [books, setBooks] = React.useState([]);
  
  React.useEffect(() => {
   
    getBooks();
    
  }, []);

  const getBooks = () => {
    ProductService.getAllproducts()
      .then((result) => {
        console.log(result);
        setBooks(result.data.data);

        console.log("getting all books");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(books);

  const addCart = (book) => {
    let data = {
      _id: book._id,
    };
    CartService.addtocart(data)
      .then((result) => {
        getBooks();
       
       
      })
      .catch(() => {});
  };
  const wishlist = (book) => {
    let data = {
      _id: book._id,
    };
    wishlistService
      .addwishlist(data)
      .then(() => {
        getBooks();
       
       
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="book-containers">
        <p className="books">Books </p>
        <p className="item"> (128 items)</p>
        <select name="sort by relevance" className="price">
          <option value="">Sort by relevance</option>
          <option value="">Price:Low to high</option>
          <option value="">Price:High to low</option>
          <option value="">Newest arrivals</option>
        </select>
      </div>
      <div className="map-container">
        {books.map((book, index) => {
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
                <div className="order">
                  <button
                    className="bag"
                    onClick={() => {
                      addCart(book);
                    }}
                  >
                    ADD TO BAG
                  </button>
                  <button
                    className="wishlist"
                    onClick={() => {
                      wishlist(book);
                    }}
                  >
                    WISHLIST
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Displaybook;
