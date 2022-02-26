import React from "react";
import "./Displaycart.scss";
import { CartService } from "../../Service/CartService";
import { Customerdetails } from "../../Service/Custmerdetails";
import bookimage from "../../Assets/book.png";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router";

export default function Displaycart(props) {
  const navigate = useNavigate();

  const [orderbutton, setOrderbutton] = React.useState(true);
  const [checkout, setCheckout] = React.useState(true);
  const [fields, setFields] = React.useState({
    city: "",
    fullname: "",
    mobilenumber: "",
    pincode: "",
    locality: "",
    landmark: "",
    address: "",
  });

  const [continuebutton, setcontinuebutton] = React.useState(true);

  React.useEffect(() => {
    props.getCart();
  }, []);
  const changebutton = () => {
    setOrderbutton(false);
  };
  const orderSummary = () => {
    setcontinuebutton(false);
    setCheckout(false);
  };

  const changefield = (e) => {
    setFields((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const addDetails = () => {
    let data = {
      city: fields.city,
      fullname: fields.fullname,
      mobilenumber: fields.mobilenumber,
      pincode: fields.pincode,
      locality: fields.locality,
      landmark: fields.landmark,
      address: fields.address,
    };

    Customerdetails.addcustomerdetails(data)
      .then((result) => {})
      .catch(() => {});
  };
  const callfunctions = () => {
    addDetails();
    orderSummary();
  };

  const checkoutorder = () => {
    navigate("/order");
  };

  return (
    <>
      <div className="maincart-container">
        <h3 className="heading">Home/ My cart</h3>
        <div className="cart-container">
          <h3 className="my-cart">My Cart({props.quantity})</h3>

          {props.cart
            ? props.cart.map((books) => {
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
                        <div className="pricetage">Rs:-{books.price}</div>
                      </div>
                    </div>
                    <div className="update-cart">
                      <RemoveCircleOutlineOutlinedIcon htmlColor="grey" />
                      <div className="cart-quantity">{books.quantity}</div>
                      <AddCircleOutlineOutlinedIcon htmlColor="grey" />
                      <div className="remove">Remove</div>
                    </div>
                  </div>
                );
              })
            : ""}
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
                <button
                  className="continue-button"
                  onClick={() => callfunctions()}
                >
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
                        src={bookimage}
                        alt="image"
                        style={({ height: "105px" }, { width: "100 px" })}
                      />
                    </div>
                    <div className="cart-descriptions">
                      <div className="book-nams">{books.bookName}</div>
                      <div className="author-nams">{books.author}</div>
                      <div className="pricetages">Rs:-{books.price}</div>
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
    </>
  );
}
