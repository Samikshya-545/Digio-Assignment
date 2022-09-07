import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../Style/login.css";
import line from "../Images/horizontal_line.png"

const Login = () =>{
    return(
        <div  className="login_page">
        <NavBar/>
        <div className="content">
            <div className="cont_holder">
                <div className="upper">
                    <div className="info">
                        <div className="fstline">sanket@digio.in uses Gmail?</div>
                        <div className="sndline">login using google</div>
                    </div>
                    <div className="gl_btn">
                    <button htmlType="submit" className="google">g+ Google
        </button>
                    </div>

                </div>
                <div className="or">
                    <div className="hori_line">
                        <img src={line} className="line"/>
                    </div>
                    <div className="or_word">OR</div>
                    <div className="hori_line">
                    <img src={line} className="line"/>
                    </div>
                </div>
                <div className="lower">
                    <div className="lebel">Proceed with your email address</div>
                    <div className="input_box">
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="tnc">
                    <div className="con">
                        By continuing, I confirm to the <b>Tearms and Service</b>
                    </div>
                    <div className="scon">and <b>Privacy Policy</b> of Digio.in</div>
                    <button type="button" id="btn"> <Link to="/details">CONTINUE</Link></button>
                </div>
                

                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Login;