import React, { useState } from "react";
import profilePic from '../Asset/login-icon.png'
import logoImage from '../Asset/logo.webp'
import './Navbar.css'

const Navbar = () => {

        const [menu,setMenu] = useState("consultant")

    return(
        <div className="nav">            
            <div><img className="nav-logo" src={logoImage} alt="logImg" /></div>                
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("consultant")}}>Fashion Consultant {menu==="consultant"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("collections")}}>Collection {menu==="collections"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("calendar")}}>Calendar {menu==="calendar"?<hr/>:<></>}</li>
            </ul>                        
            <div><img className='profile-image' src={profilePic}/></div>
        </div>
    );
}

export default Navbar
