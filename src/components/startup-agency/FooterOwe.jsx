import React from "react";
import { Link } from "react-router-dom";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import FooterMenuListTwo from "../common/footer/FooterMenuListTwo";

const FooterOwe = () => {
   return (
      <React.Fragment>
         <div className="pt-1" id="contact">
            <footer className="vcamp-footer-two pt-150 lg-pt-100">
               <div className="container">
                  <div className="row justify-content-center justify-content-md-start">
                     <div className="col-xl-3 col-lg-2 mb-40 text-center text-lg-start">
                        <div className="logo">
                           <Link to="/">
                              <img src={require("../../assets/images/svg/logosecondary.svg").default} alt="brand" />
                           </Link>
                        </div>
                     </div>
                     <FooterMenuListTwo />
                  </div>
                  {/* End .row */}
               </div>
               {/* End .container */}

               <div className="container">
                  <div className="bottom-footer">
                     <CopyrightFooter />
                  </div>
               </div>
               {/* End .container */}
            </footer>
         </div>
      </React.Fragment>
   );
};
export default FooterOwe;
