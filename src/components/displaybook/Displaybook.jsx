import React from "react";
import "./Displaybook.scss";
import bookimage from "../../Assets/book.png";
import { ProductService } from "../../Service/ProductService";

function Displaybook() {
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Displaybook;
