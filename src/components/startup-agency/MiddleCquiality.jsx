import React from "react";

export const MiddleCquiality = () => {
   return (
      <div className="bg-deep-cyan vcamp-text-block-eight  vcamp-feature-section-nine pt-100 lg-pt-50 h-100">
         <div className="container">
            <img className="d-none d-xl-block position-absolute   w-100 h-100  bottom-50  img-fluid" src={require("../../assets/images/svg/logohalf.svg").default} alt="brand" />
            <div className="row">
               <div className="col-12 text-center">
                  <div className="text-wrapper">
                     <h2>Our creative company is product of quality, tact, & heart.</h2>
                  </div>
                  {/* <!-- /.text-wrapper --> */}
               </div>
            </div>
         </div>
         {/* End .container */}
      </div>
   );
};
