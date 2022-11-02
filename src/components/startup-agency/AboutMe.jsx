import React from "react";
import CopyrightSocial from "../common/footer/CopyrightSocial";
import img2 from "../../assets/images/img/Charlie_face.jpg";

export const AboutMe = () => {
   return (
      <div className="vcamp-text-block-nine pt-180 pb-180 lg-pt-120 lg-pb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-8 col-sm-11">
                  <div className="text-wrapper">
                     <h2>Michal Krasnansky</h2>
                     <p className="text-lg">I started startup studio with a mission to partner with creative founders connecting them with ideas and placing them on network.</p>
                     <CopyrightSocial />
                  </div>
                  {/* <!-- /.text-wrapper --> */}
               </div>
            </div>
         </div>
         {/* End .container */}

         <img src={img2} alt="illustration" className="illustration shapes rounded-circle opacity-50" data-aos="fade-left" />
      </div>
   );
};
