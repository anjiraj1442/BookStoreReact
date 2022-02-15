import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './Login.scss'
import { UserService } from '../../Service/UserService';
 import { useNavigate } from 'react-router';

function Login() {
      const navigate = useNavigate();
    const[textfieldvalues,setTextfieldvalues]= React.useState({
        emailId : "",
        password : "",
        emailIdError: false,
        passwordError: false
    })
    const changeFields=(e)=>{
        setTextfieldvalues(previousvalues=>{
           return {...previousvalues,[e.target.name]:e.target.value}
        })
    }
    const validate=()=>{
        let emailError = textfieldvalues.emailId==='' ? true : false
        let passworderror = textfieldvalues.password==='' ? true : false
        setTextfieldvalues((previousvalues)=>{
            return {...previousvalues,emailIdError: emailError ,passwordError : passworderror}
        })
        return emailError||passworderror

    }
    const login =()=> {
        let isValidate = validate();
        if(!isValidate){
            let data={
                "email":textfieldvalues.emailId,
                "password" : textfieldvalues.password
            }
            UserService.login(data).then(()=>{
                console.log("step");
                console.log(data);
            //     console.log(data.data.data.result.fullname);
            // localStorage.setItem("name" ,data.data.data.result.fullname )
            // localStorage.setItem("token",data.data.data.token)
             navigate('/dashboard')
            }).catch((err)=>{
                
            })
        }
    }
    return (<>
        <div className='login'>
            <div className='mail'>
                <TextField name ="emailId" className="emailfield"  size="small" type='text' id="outlined-email" label="Email Id" variant="outlined"
                onChange={(e)=>changeFields(e)} error={textfieldvalues.emailIdError}/>
            </div>
            <div>
                <TextField name="password" className="passwordfield"  size="small" type='password' id="outlined-password" label="Password" variant="outlined"
               onChange={(e)=>changeFields(e)} error ={textfieldvalues.passwordError} />
            </div>
            <br></br>
            <Button className='loginbutton'  onClick={()=>login()} > Login </Button>
            <p className='mid'>OR</p>
            <div className='Buttons'>
                <div className='facebookbButton'>
                    <Button style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                </div>
                <div className='googleButton'>
                    <Button variant="contained">Google</Button>
                </div>
            </div>
        </div>
    </>);
}

export default Login;