import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../common/form/SubscribeForm";
import Popup from "../common/video-popup/Popup";
import img1 from "../../assets/images/assets/ils_04.png";
import LoginForm from "../common/form/LoginForm";
import SignupForm from "../common/form/SignupForm";
import PopupTwo from "../common/video-popup/PopupTwo";
import PopupThree from "../common/video-popup/PopupThree";

const Hero2 = () => {
   const [singOrLogIn, setSingOrLogIn] = useState(true);
   const [textIn, setTextIn] = useState({ logText: "Log in", questText: "Not a member yet?", keepText: "Keep me logged in" });

   const handleClickChangeLogIn = () => {
      if (singOrLogIn) {
         setTextIn({ idText: "Sign up", logText: "Log in", questText: "Not a member yet?", keepText: "Keep me logged in" });
      } else {
         setTextIn({ idText: "Log in", logText: "Sign up", questText: "Not a member yet?", keepText: "Keep me logged in" });
      }
      setSingOrLogIn(!singOrLogIn);
   };
   return (
      <div className="hero-banner-eight mt-225 md-mt-150">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <p className="term-text">
                     {textIn.questText}
                     <a href="javascript:void(0)" onClick={handleClickChangeLogIn}>
                        {textIn.logText}
                     </a>
                  </p>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6 ">{singOrLogIn ? <LoginForm textIn={textIn} /> : <SignupForm textIn={textIn} />}</div>
               <div className="col-lg-5 ms-auto">
                  <Popup />
                  <h2 className="hero-heading">We are there for you.</h2>
                  <p className="hero-sub-heading text-lg">We are helping client to create Business with our talented expert.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero2;
