import React from "react";
import "./Mainpage.scss";
import logo from "../../Assets/Image1.png";
import Login from "../login/Login";
import Signup from "../signup/Signup";

function Mainpage() {
  const [options, setOptions] = React.useState(true);
  console.log("intial");
  const loginOptions = () => {
    console.log("login");
    setOptions(true);
  };
  const signupOptions = () => {
    console.log("signup");
    setOptions(false);
  };

  return (
    <div>
      <div className="home-container">
        <div className="left-image">
          <img className="mainLogo" src={logo} alt="this is logo"></img>
          <div className="logoname">ONLINE BOOK SHOPPING</div>
          <div className="loginsignin">
            <div className="login" onClick={loginOptions}>
              LOGIN
            </div>
            <div className="signup" onClick={signupOptions}>
              SIGNUP
            </div>
            <div className="loginsignincomponents">
              {options ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
