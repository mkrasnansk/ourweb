import React from "react";
import Seo from "../../components/common/seo/Seo";
import AddressBlock from "../../components/creative-agency/AddressBlock";
import { AboutMe } from "../../components/startup-agency/AboutMe";
import FooterOwe from "../../components/startup-agency/FooterOwe";
import Header from "../../components/startup-agency/Header";
import Hero from "../../components/startup-agency/Hero";
import Hero2 from "../../components/startup-agency/Hero2";
import { MiddleCgoal } from "../../components/startup-agency/MiddleCgoal";
import { MiddleCquiality } from "../../components/startup-agency/MiddleCquiality";
import TextBlock from "../../components/startup-agency/TextBlock";
import { WorkGalery } from "../../components/startup-agency/WorkGalery";

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

         <MiddleCgoal />

         <WorkGalery />

         {/* <ContactForm /> */}
         <AddressBlock/>
         <FooterOwe />
      </div>
   );
};

export default StartupAgency;
