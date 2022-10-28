import React from "react";
import Feature from "./Feature";

const Hero = () => {
   return (
         <div className="vcamp-feature-section-nine pt-170 lg-pt-120 h-100" id="about">
            <div className="container h-100 d-flex align-items-center">
               <div className="title-style-seven text-center pb-60 lg-pb-20">
                <div className="arrow">arr</div>
                  <h2 className="title">
                     We help shape your ideas and turn them into{" "}
                     <span>
                        real businesses. <img src={require("../../assets/images/shape/shape_53.svg").default} alt="shape" />
                     </span>
                  </h2>
               </div>
            </div>
         </div>
   );
};

export default Hero;
