import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/images/assets/ils_12.png";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import Seo from "../../components/common/seo/Seo";
import Blog from "../../components/startup-agency/Blog";
import Header from "../../components/startup-agency/Header";
import Hero from "../../components/startup-agency/Hero";
import Hero2 from "../../components/startup-agency/Hero2";
import Team from "../../components/startup-agency/Team";
import TextBlock from "../../components/startup-agency/TextBlock";
import TextBlockList from "../../components/startup-agency/TextBlockList";

const StartupAgency = () => {
   return (
      <div className="main-page-wrapper">
         <Seo title="Owe" />
         <Header />
         <Hero />
         <TextBlock />
         <Hero2 />

         {/* <!-- /.vcamp-text-block-seven --> */}

         {/* <!-- 
        =============================================
        Vcamp Text Block Eight
        ============================================== 
        --> */}
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
         {/* <!-- /.vcamp-text-block-eight --> */}

         {/* <!-- 
        =============================================
        Vcamp Text Block Nine
        ============================================== 
        --> */}
         <div className="vcamp-text-block-nine pt-180 pb-180 lg-pt-120 lg-pb-100" id="join-us">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 col-md-8 col-sm-11">
                     <div className="text-wrapper">
                        <h2>Join 1 million+ entrepreneurs that love what we do.</h2>
                        <p className="text-lg">We are the startup studio with a mission to partner with the best founders connecting them with ideas and placing lorem.</p>
                        <Link to="/contact-v2" className="theme-btn-nine">
                           JOIN OUR FAMILY
                        </Link>
                     </div>
                     {/* <!-- /.text-wrapper --> */}
                  </div>
               </div>
            </div>
            {/* End .container */}

            <img src={img2} alt="illustration" className="illustration shapes" data-aos="fade-left" />
         </div>
         {/* <!-- /.vcamp-text-block-nine --> */}

         {/* <!-- 
        =============================================
        Vcamp Text Block Ten
        ============================================== 
        --> */}
         <div className="vcamp-text-block-ten dark-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7 col-md-6 col-sm-8 ms-auto">
                     <div className="title-style-seven white-vr text-end text-md-start" data-aos="fade-left">
                        <h2 className="title">
                           <span className="bg-shape">20 cities</span> <b />
                           and growing.
                        </h2>
                     </div>
                     {/* <!-- /.title-style-seven --> */}
                  </div>
               </div>
            </div>
            {/* End .container */}

            <ul className="city-list style-none">
               <TextBlockList />
            </ul>
         </div>
         {/* <!-- /.vcamp-text-block-ten --> */}

         {/* <!-- 
        =============================================
        Team Section Three
        ============================================== 
        --> */}
         <div className="team-section-three pt-180 lg-pt-120" id="team">
            <div className="container">
               <div className="row">
                  <div className="col-lg-9 m-auto">
                     <div className="title-style-seven text-center pb-20 lg-p0">
                        <h2 className="title">
                           We love our work.
                        </h2>
                        <p>Our mission is to most aligned fund for funders at the seed stage. Everyone on the investment team has started a company.</p>
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
         {/* <!-- /.team-section-three --> */}

         {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
         <footer className="vcamp-footer-two pt-150 lg-pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-2 mb-40 text-center">
                     <div className="logo">
                        <Link to="/">
                           <img src={require("../../assets/images/svg/logosecondary.svg").default} alt="brand" />
                        </Link>
                     </div>
                  </div>
                  {/* End .col */}

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
         {/* <!-- /.vcamp-footer-two --> */}
      </div>
      // End .main-page-wrapper
   );
};

export default StartupAgency;
