import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import aadharimg from '../Images/aadhar.png';
import documentImg from '../Images/document.jpg';
import checkIcon from '../Images/checkIcon.svg';
import '../Style/details.css';
import '../Style/modal.css';


const Details = () =>{

    var [aadharNo, setAadharNo] = useState();
    var [isAadharCorrect, setIsAadharCorrect] = useState(false);
    var [otpSent, setOtpSent] = useState(false);
    var [otp, setOtp] = useState();
    var [isOtpCorrect, setOtpCorrect] = useState(false);
    var [isFormSubmitted, setIsFormSubmitted] = useState(false);
    var [signingStatusMessage, setSigningStatusMessage] = useState("Signing ...");
    var [showBanner, setShowBanner] = useState(false);
    let formModal;
    
    
    useEffect(() => {
    
    formModal = document.getElementById("formModal");
        if(!isFormSubmitted){
            openModal();
        }
        
    },[]);

    

    if (window.performance) {
        if (performance.navigation.type == 1) {
        //   localStorage.removeItem("aadharVerified");
        } 
      }
      

      const startBanner = () => {
        setTimeout(function() {
            setSigningStatusMessage("Signed");
        }, 1000);
        setTimeout(function() {
            setShowBanner(false);
        }, 3000);
      }

      const handleAadharChange = (e)=>{
        var aadharNo = e.target.value;
        if(aadharNo.length == 12){
            setIsAadharCorrect(true);
        }
        else{
            setIsAadharCorrect(false);
            
        }
        setAadharNo(aadharNo);
      }

      const handleAadharVerify = ()=> {
        setOtpSent(true);
      }

      const handleSubmit = () => {
        closeModal();
        setIsFormSubmitted(true);
        setShowBanner(true);
        startBanner();
      }
      
      const handleOtpChange = (e)=>{
        var otp = e.target.value;
        if(otp.length == 6){
            setOtpCorrect(true);
        }
        else{
            setOtpCorrect(false);
            
        }
        setOtp(otp);
      }

      const closeModal = ()=>{
        // Get the modal
        var modal = document.getElementById("formModal");


        modal.style.display = "none";
        }

        const openModal = ()=> {
            // Get the modal
            var modal = document.getElementById("formModal");

            modal.style.display = "block";
        }
      
    return(
        <div  className="details_page">
            <NavBar/>

            {/* <div id="formModal" className="modal fade" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Register Aadhar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="modalBodyContainer">
                            <div className="modalAadharContainer">
                                <img src={aadharimg}></img>
                            </div>
                            <div className="modalFormContainer">
                                <form className="aadharForm">
                                    <input type="number" className="form-control " id="inlineFormInput" placeholder="Enter your Aadhar Card No here ..." onChange={handleAadharChange}/>
                                    {isAadharCorrect && 
                                        <button type="submit" className="btn btn-primary ml-3">Verify</button>
                                    }
                                    {!isAadharCorrect && 
                                        <button type="submit" className="btn btn-primary ml-3" disabled>Verify</button>
                                    }
                                    
                                </form>

                                {isAadharCorrect && 
                                    <form className="">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                                        <label className="custom-control-label" for="customControlAutosizing">I agree to eSign this KYC document to get
                                        started</label>
                                        </div>
                                        
                                        <div className="otpForm">
                                            <div className="col-xs-6">
                                                <input type="number" className="form-control " id="inlineFormInput" placeholder="Enter your Aadhar Card No here ..." onChange={handleOtpChange}/>
                                            </div>
                                            
                                            {isOtpCorrect && 
                                            <button type="submit" className="btn btn-primary ml-3" onClick={handleSubmit} data-bs-dismiss="modal">Submit</button>
                                            }
                                            {!isOtpCorrect && 
                                                <button type="submit" className="btn btn-primary ml-3" disabled>Submit</button>
                                            }
                                            </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div id="formModal" class="modal fade"data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Register Aadhar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="modalBodyContainer">
                                <div className="modalAadharContainer">
                                    <img src={aadharimg}></img>
                                </div>
                                <div className="modalFormContainer">
                                    <form className="aadharForm">
                                        <input type="number" className="form-control " id="inlineFormInput" placeholder="Enter your Aadhar Card No here ..." onChange={handleAadharChange}/>
                                        {isAadharCorrect && 
                                            <button type="submit" className="btn btn-primary ml-3">Verify</button>
                                        }
                                        {!isAadharCorrect && 
                                            <button type="submit" className="btn btn-primary ml-3" disabled>Verify</button>
                                        }
                                        
                                    </form>

                                    {isAadharCorrect && 
                                        <form className="">
                                            <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                                            <label className="custom-control-label" for="customControlAutosizing">I agree to eSign this KYC document to get
                                            started</label>
                                            </div>
                                            
                                            <div className="otpForm">
                                                <div className="col-xs-6">
                                                    <input type="number" className="form-control " id="inlineFormInput" placeholder="Enter your Aadhar Card No here ..." onChange={handleOtpChange}/>
                                                </div>
                                                
                                                {isOtpCorrect && 
                                                <button type="submit" className="btn btn-primary ml-3" onClick={handleSubmit} data-bs-dismiss="modal">Submit</button>
                                                }
                                                {!isOtpCorrect && 
                                                    <button type="submit" className="btn btn-primary ml-3" disabled>Submit</button>
                                                }
                                                </div>
                                        </form>
                                    }
                                </div>
                    </div>
                </div>
                </div>
            </div>
            </div> */}
            
            <div id="formModal" class="modal">
                <div id="" class="modal-content">
                    <div class="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Register Aadhar</h3>
                        <span class="close" onClick={closeModal}>&times;</span>
                        
                    </div>
                    <div class="modal-body">
                        <div className="modalBodyContainer">
                                        <div className="modalAadharContainer">
                                            <img src={aadharimg}></img>
                                        </div>
                                        <div className="modalFormContainer">
                                            <div className="aadharForm">
                                                <input type="number" className="form-control " id="inlineFormInput" placeholder="Enter your Aadhar Card No here ..." onChange={handleAadharChange}/>
                                                {isAadharCorrect && 
                                                    <button className="btn btn-primary ml-3" onClick={handleAadharVerify}>Verify</button>
                                                }
                                                {!isAadharCorrect && 
                                                    <button className="btn btn-primary ml-3" disabled>Verify</button>
                                                }
                                                
                                            </div>

                                            {otpSent && 
                                                <div className="">
                                                    <div className="custom-control custom-checkbox mr-sm-2">
                                                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                                                    <label className="custom-control-label" for="customControlAutosizing">I agree to eSign this KYC document to get
                                                    started</label>
                                                    </div>
                                                    
                                                    <div className="otpForm">
                                                        <div className="col-xs-6">
                                                            <input type="number" className="form-control " id="inlineFormInput" placeholder="Enter OTP here ..." onChange={handleOtpChange}/>
                                                        </div>
                                                        
                                                        {isOtpCorrect && 
                                                        <button className="btn btn-primary ml-3" onClick={handleSubmit} data-bs-dismiss="modal">Submit</button>
                                                        }
                                                        {!isOtpCorrect && 
                                                            <button className="btn btn-primary ml-3" disabled>Submit</button>
                                                        }
                                                        </div>
                                                </div>
                                            }
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="documentContainer">
                <img src={documentImg}></img>
            </div>

            {showBanner && 
            <div className="successBanner">
                <h2>{signingStatusMessage}</h2>
                <a href="#">Mutual Non-Disclosure Agreement</a>
                <div className="bannerContainer">
                    <img src={checkIcon}></img>
                    <h4>Aadhaar verified successfully</h4>
                </div>
            </div>
            }

            <div className="footerBtnContainer">
                <div className="footerBtn">Request OTP to Sign</div> 

            </div>
        </div>
    );
}

export default Details;