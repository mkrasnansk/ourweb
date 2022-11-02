import React from "react";
import Team from "./Team";

export const WorkGalery = () => {
   return (
      <div className="vcamp-text-block-nine pt-180 lg-pt-120" id="gallery">
         <div className="container">
            <div className="row">
               <div className="col-lg-9 m-auto">
                  <div className="text-wrapper text-center pb-20 lg-p0">
                     <h2 className="title">We love our work.</h2>
                     <p className="text-lg">Our mission is to most aligned fund for funders at the seed stage. Everyone on the investment team has started a company.</p>
                  </div>
                  {/* <!-- /.title-style-seven --> */}
               </div>
            </div>
            {/* End .row */}

            <div className="row">
               <div className="col-xxl-11 m-auto">
                  <div className="row">
                     <Team />
                  </div>
               </div>
            </div>
            {/* End .row */}
         </div>
         {/* End .container */}
      </div>
   );
};
