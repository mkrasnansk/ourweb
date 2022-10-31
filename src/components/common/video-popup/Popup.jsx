import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Popup = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>
         <div className="container">
            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
            {/* End popup component */}

            <div className="d-flex justify-content-center" onClick={() => setOpen(true)} role="button">
               <div className="d-flex justify-content-start border border-danger rounded-5 p-2">
                  <img className=" me-1" src={require("../../../assets/images/icon/icon_41.svg").default} alt="icon" />
               </div>
            </div>
         </div>
      </>
   );
};

export default Popup;
