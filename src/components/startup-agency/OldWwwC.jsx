import React from "react";

export const OldWwwC = (props) => {
   return (
      <div className="row justify-content-center">
         <div className="col-12 col-md-6">
            <div className="card ">
               <div className="card-body">
                  <div className="row">
                     <div className="col-12 display-6">The website </div>
                     <strong className="text-primary">{props.data.oldTitle}</strong>
                     <div> is not up to date.</div>
                     <div className="col-12">The new website is </div>
                     <strong className="text-primary">comming soon.</strong>
                     <div className="col">
                        {/* <Link to={`/${props.data.oldPath}`} className="theme-btn-nine " >Novy Web</Link> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
