<>
  <div className="maincart-container">
    <h3 className="heading">Home/ My cart</h3>
    <div className="cart-container">
      <h3 className="my-cart">My Cart({props.quantity})</h3>
      {props.cart.map((books) => {
        return (
          <div>
            <div className="content-container">
              <div className="image-cart">
                <img
                  src={book}
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
                onClick={() => {
                  subtractquantity(books);
                }}
              />
              <div className="cart-quantity">{books.quantity}</div>
              <AddCircleOutlineOutlinedIcon
                htmlColor="grey"
                onClick={() => {
                  addquantity(books);
                }}
              />
              <div className="remove" onClick={() => removebook(books)}>
                Remove
              </div>
            </div>
          </div>
        );
      })}
      {orderbutton ? (
        <button
          className="button-order"
          onClick={() => {
            changebutton();
          }}
        >
          Place order
        </button>
      ) : (
        ""
      )}
    </div>
    {orderbutton ? (
      <div className="customer-details">
        <div className="inside-details">Customer Details</div>
      </div>
    ) : (
      <div className="customer-detail">
        <div className="inside-customerdetails">
          <h3 className="heading">Customer Details</h3>

          <div className="text-fields">
            <div className="name-field">
              <TextField
                size="medium"
                name="fullname"
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => changefield(e)}
              />
            </div>
            <div className="mobile-num">
              <TextField
                name="mobilenumber"
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => changefield(e)}
              />
            </div>
          </div>
          <div className="text-fields">
            <div className="name-field">
              <TextField
                name="pincode"
                size="medium"
                id="outlined-basic"
                label="Pin code"
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => {
                  changefield(e);
                }}
              />
            </div>
            <div className="mobile-num">
              <TextField
                name="locality"
                id="outlined-basic"
                label="Locality"
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => changefield(e)}
              />
            </div>
          </div>
          <div className="Address">
            <TextField
              name="address"
              id="outlined-basic"
              label="Address"
              variant="outlined"
              style={{ width: "532px" }}
              multiline="true"
              rows="4"
              onChange={(e) => {
                changefield(e);
              }}
            />
          </div>
          <div className="text-fields">
            <div className="name-field">
              <TextField
                name="city"
                size="medium"
                id="outlined-basic"
                label="City/town"
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => {
                  changefield(e);
                }}
              />
            </div>
            <div className="mobile-num">
              <TextField
                name="landmark"
                id="outlined-basic"
                label="Landmark"
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => {
                  changefield(e);
                }}
              />
            </div>
          </div>

          <div className="radio">
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ marginTop: "2%" }}
              >
                Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                // name="addressType"
              >
                <FormControlLabel
                  name="addressType"
                  value="Home"
                  control={<Radio />}
                  label="Home"
                  onClick={(e) => {
                    changefield(e);
                  }}
                />
                <FormControlLabel
                  name="addressType"
                  value="Work"
                  control={<Radio />}
                  label="Work"
                  onClick={(e) => {
                    changefield(e);
                  }}
                />
                <FormControlLabel
                  name="addressType"
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onClick={(e) => {
                    changefield(e);
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
          {continuebutton ? (
            <button className="continue-button" onClick={() => callfunctions()}>
              Continue
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    )}

    {checkout ? (
      <div className="customer-details">
        <div className="inside-details">Order Summary</div>
      </div>
    ) : (
      <div className="order-details">
        <div className="inside-orderdetails">Order Summary</div>
        {props.cart.map((books) => {
          return (
            <div>
              <div className="content-containers">
                <div className="image-carts">
                  <img
                    src={book}
                    alt="image"
                    style={({ height: "105px" }, { width: "100 px" })}
                  />
                </div>
                <div className="cart-descriptions">
                  <div className="book-nams">{books.bookName}</div>
                  <div className="author-nams">{books.author}</div>
                  <div className="pricetages">{books.price}</div>
                </div>
              </div>
            </div>
          );
        })}
        <button className="checkout-button" onClick={() => checkoutorder()}>
          checkout
        </button>
      </div>
    )}
  </div>
</>;
