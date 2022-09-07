import React from "react";
import "../Style/navbar.css";
import logo from "../Images/generic-logo-hi.png";

const NavBar = () =>{
    return(
        <div className="navbar">
            <div className="sign_details">
                <div className="fline">Sign document using</div>
                <div className="lline">sanket@digio.in</div>
            </div>
            <div className="logo">
            <div className="logo_cont"><img src={logo} alt="Digio Logo" className="digio_logo"/></div>
            </div>
        </div>
    );
}
export default NavBar;