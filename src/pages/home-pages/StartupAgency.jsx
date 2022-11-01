import React from "react";
import Seo from "../../components/common/seo/Seo";
import { AboutMe } from "../../components/startup-agency/AboutMe";
import FooterOwe from "../../components/startup-agency/FooterOwe";
import Header from "../../components/startup-agency/Header";
import Hero from "../../components/startup-agency/Hero";
import Hero2 from "../../components/startup-agency/Hero2";
import { MiddleCquiality } from "../../components/startup-agency/MiddleCquiality";
import Team from "../../components/startup-agency/Team";
import TextBlock from "../../components/startup-agency/TextBlock";

const StartupAgency = () => {
   return (
      <div className="main-page-wrapper">
         <Seo title="Owe" />
         <Header />
         <Hero />
         <TextBlock />
         <Hero2 />

         <MiddleCquiality />

         <AboutMe />
         {/* <!-- /.vcamp-text-block-nine --> */}

         {/* <!-- 
        =============================================
        Vcamp Text Block Ten
        ============================================== 
        --> */}
         <div className="bg-deep-cyan vcamp-text-block-eight  vcamp-feature-section-nine pt-100 lg-pt-50 h-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-7 col-md-6 col-sm-8 ms-auto">
                     <div className=" white-vr text-end text-md-start" data-aos="fade-left">
                        <div className="text-wrapper">
                           <h2 >My goal is your success.</h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
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
                        <h2 className="title">We love our work.</h2>
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

         <FooterOwe />
      </div>
   );
};

export default StartupAgency;
