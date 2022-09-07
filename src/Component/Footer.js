import React from "react";
import "../Style/footer.css";
import flogo from "../Images/digio_logo.jpg"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="left">
                <div className="logo_cont">
                <div className="logocon">
                    <div className="flogo"><img src={flogo} id="flogo"/></div>
                </div>
                    <div className="fcont">
                        <div className="fsl">Powered by</div>
                        <div className="ssl"><a href="www.digio.in">www.digio.in</a></div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="steps"><b>1</b>/3 steps</div>
            </div>
        </div>
    );
}

export default Footer;