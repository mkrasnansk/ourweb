import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../common/form/LoginForm";
import SignupForm from "../common/form/SignupForm";
import Popup from "../common/video-popup/Popup";

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
      <React.Fragment>
         <div id="join-us" className="  pt-1" >
            <div className="hero-banner-eight mt-225 md-mt-150 ">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <p className="term-text">
                           {textIn.questText}
                           <Link to={()=>void(0)} onClick={handleClickChangeLogIn}>
                              {textIn.logText}
                           </Link>
                        </p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6 ">{singOrLogIn ? <LoginForm textIn={textIn} /> : <SignupForm textIn={textIn} />}</div>
                     <div className="col-lg-5 ms-auto">
                        <div className="d-flex align-items-center">
                           <h2 className="hero-heading">We are there for you.</h2>
                           <Popup />
                        </div>
                        <p className="hero-sub-heading text-lg">We are helping client to create Business with our talented expert.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Hero2;
