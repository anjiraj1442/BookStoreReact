import React from 'react';
import './Mainpage.scss'
import logo from '../../Assets/Image1.png'
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';
// import { useNavigate } from "react-router-dom";



function Mainpage() {

    // const navigate = useNavigate();
    const [options, setOptions] = React.useState(true)
    // const loginOptions = () => {
    //     setOptions(true)
    // //    navigate('/login')
    // }
    // const signupOptions =()=>{
    //     setOptions(true)
    // //    navigate('/signup')
    // }
    const handleOnClick = () => {
        setOptions(!options);
        
      };
    return (<div>
       <div className='home-container'>
            <div className='left-image'>
                <img className="mainLogo" src={logo} alt="this is logo"></img>
                <div className='logoname'>ONLINE BOOK SHOPPING</div>
                <div className='loginsignin'>
                    <div className='login' onClick={handleOnClick}>
                        LOGIN
                    </div>
                    <div className='signup'  onClick={handleOnClick}  >
                        SIGNUP
                    </div>
                    <div className='loginsignincomponents'>
                    {options ? <Login /> :<Signup />}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Mainpage;