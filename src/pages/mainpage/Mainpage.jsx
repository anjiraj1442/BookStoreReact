import React from "react";
import "./Mainpage.scss";
import logo from "../../Assets/Image1.png";
import Login from "../login/Login";
import Signup from "../signup/Signup";

function Mainpage() {
  const [options, setOptions] = React.useState();
  const [test, settest]= React.useState("hello")
  const loginOptions = () => {
    setOptions(true);
  };
  const signupOptions = () => {
    setOptions(false);
  };

  
  return (
    <div>
      <div className="home-container">
        <div className="left-image">
          <img className="mainLogo" src={logo} alt="this is logo"></img>
          <div className="logoname">ONLINE BOOK SHOPPING</div>
          <div className="loginsignin">
            <div className="login" onClick={() => loginOptions(true)}>
              LOGIN
            </div>
            <div className="signup" onClick={() => signupOptions(false)}>
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
