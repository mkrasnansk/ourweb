import React from "react";
import { Link } from "react-router-dom";
import HeaderModal from "../designer-portfolio/header/HeaderModal";

const AddressBlock = () => {
   return (
      <>
         <div className="bg-deep-cyan vcamp-text-block-eight  vcamp-feature-section-nine mt-100 lg-mt-150 h-100" id="contact">
            <div className="container">
               <div className="row ">
                  <div className="col-md-6">
                     <div className="address-block-two d-flex border-right">
                        <img src={require("../../assets/images/icon/menu_icon_04.svg").default} alt="icon" className="icon" />
                        <div className="text-meta">
                           <h4 className="title">Our Address</h4>
                           <p>
                              Hodalova 10, 841 04 <br />
                              Bratislava - Karlova Ves <br />
                              Slovakia
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6">
                     <div className="address-block-two d-flex">
                        <img src={require("../../assets/images/icon/menu_icon_01.svg").default} alt="icon" className="icon" />
                        <div className="text-meta">
                           <h4 className="title">Contact Info</h4>
                           <p>
                              Leave us a message
                              <br />
                              <a href="mailto:miso.krasnansky@gmail.com">miso.krasnansky@gmail.com</a>
                              <Link to={() => void 0} data-bs-toggle="modal" data-bs-target="#contactModal">
                                 Contact Form
                              </Link>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="modal fade" id="contactModal" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
               <HeaderModal />
            </div>
         </div>
      </>
   );
};

export default AddressBlock;
