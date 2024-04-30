import React from "react";
import './Page.css'
import { Link } from "react-router-dom";

const EmailLogin = () => {
    return (
        <div className='container'>            
            <div className='notification-text'><h2>Login With Email</h2></div>
            <div className='emailpassword'>
                <p className="email-title">Email</p>
                <input type="text" className='input-text'/>
                <p className="password-title">Password</p>
                <input type="password" className='input-text'/>                                
            </div>           
            <Link to="/EmailOTP" style={{ textDecoration: 'none' , color:"black"}}><div className='Login-Button'>Login</div></Link>
            <Link to="../" style={{ textDecoration: 'none' , color:"black"}}><div className='Back-Button'>Back</div></Link>     
        </div>
    )
}

export default EmailLogin