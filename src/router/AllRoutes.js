import React from "react";
import { Route, Routes } from "react-router-dom";

// All Home Version
import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";
import ComingSoon from "../pages/ComingSoon";
import AgencyMinimal from "../pages/home-pages/AgencyMinimal";
import Business from "../pages/home-pages/Business";
import ConsultingAgency from "../pages/home-pages/ConsultingAgency";
import DesignAgencyPortfolio from "../pages/home-pages/DesignAgencyPortfolio";
import DesignerPortfolio from "../pages/home-pages/DesignerPortfolio";
import MarketingAgency from "../pages/home-pages/MarketingAgency";
import PhotographerPortfolio from "../pages/home-pages/PhotographerPortfolio";
import ServiceProvider from "../pages/home-pages/ServiceProvider";
import Startup from "../pages/home-pages/Startup";
import StartupAgency from "../pages/home-pages/StartupAgency";
import NotFound from "../pages/NotFound";

// All Elements  dropdown Heading inner pages
import UiHeaderV1 from "../pages/inner-pages/elements/header/UiHeaderV1";
import UiHeaderV2 from "../pages/inner-pages/elements/header/UiHeaderV2";
import UiHeaderV3 from "../pages/inner-pages/elements/header/UiHeaderV3";
import UiHeaderV4 from "../pages/inner-pages/elements/header/UiHeaderV4";
import UiHeaderV5 from "../pages/inner-pages/elements/header/UiHeaderV5";
import UiHeaderV6 from "../pages/inner-pages/elements/header/UiHeaderV6";
import UiHeaderV7 from "../pages/inner-pages/elements/header/UiHeaderV7";

// All Elements  dropdown Menu inner pages
import UiBlogPost from "../pages/inner-pages/elements/basic/UiBlogPost";
import UiButtons from "../pages/inner-pages/elements/basic/UiButtons";
import UiContact from "../pages/inner-pages/elements/basic/UiContact";
import UiMenuV1 from "../pages/inner-pages/elements/basic/UiMenuV1";
import UiMenuV2 from "../pages/inner-pages/elements/basic/UiMenuV2";
import UiMenuV3 from "../pages/inner-pages/elements/basic/UiMenuV3";

// All Blog dropdown inner pages
import BlogDetailsV1 from "../pages/inner-pages/blog/blog-details/BlogDetailsV1";
import BlogDetailsV2 from "../pages/inner-pages/blog/blog-details/BlogDetailsV2";
import BlogDetailsV3 from "../pages/inner-pages/blog/blog-details/BlogDetailsV3";
import DynamicBlogDetails from "../pages/inner-pages/blog/blog-details/DynamicBlogDetails";
import BlogV1 from "../pages/inner-pages/blog/layout/BlogV1";
import BlogV2 from "../pages/inner-pages/blog/layout/BlogV2";
import BlogV3 from "../pages/inner-pages/blog/layout/BlogV3";
import BlogV4 from "../pages/inner-pages/blog/layout/BlogV4";
import DynamicProductDetails from "../pages/inner-pages/shop/shop-elements/DynamicProductDetails";

// All Pages dropdown inner pages
import AboutUsV1 from "../pages/inner-pages/pages/essentials/AboutUsV1";
import AboutUsV2 from "../pages/inner-pages/pages/essentials/AboutUsV2";
import PricingV1 from "../pages/inner-pages/pages/essentials/PricingV1";
import PricingV2 from "../pages/inner-pages/pages/essentials/PricingV2";
import TeamV1 from "../pages/inner-pages/pages/essentials/TeamV1";
import TeamV2 from "../pages/inner-pages/pages/essentials/TeamV2";
import FaqV1 from "../pages/inner-pages/pages/others/FaqV1";
import FaqV2 from "../pages/inner-pages/pages/others/FaqV2";
import TestimonialV1 from "../pages/inner-pages/pages/others/TestimonialV1";
import TestimonialV2 from "../pages/inner-pages/pages/others/TestimonialV2";
import TestimonialV3 from "../pages/inner-pages/pages/others/TestimonialV3";
import ContactV1 from "../pages/inner-pages/pages/support/ContactV1";
import ContactV2 from "../pages/inner-pages/pages/support/ContactV2";
import ContactV3 from "../pages/inner-pages/pages/support/ContactV3";
import ServiceV1 from "../pages/inner-pages/pages/support/ServiceV1";
import ServiceV2 from "../pages/inner-pages/pages/support/ServiceV2";
import ServiceV3 from "../pages/inner-pages/pages/support/ServiceV3";

// All Shop main and inner pages
import ShopStandard from "../pages/home-pages/ShopStandard";
import UiMenuV4 from "../pages/inner-pages/elements/basic/UiMenuV4";
import DarkGridWithSidebar from "../pages/inner-pages/shop/layout/DarkGridWithSidebar";
import GridLayout from "../pages/inner-pages/shop/layout/GridLayout";
import GridLayoutFullWidth from "../pages/inner-pages/shop/layout/GridLayoutFullWidth";
import GridWithSidebar from "../pages/inner-pages/shop/layout/GridWithSidebar";
import Cart from "../pages/inner-pages/shop/shop-elements/Cart";
import CheckOut from "../pages/inner-pages/shop/shop-elements/CheckOut";
import ProductDetails from "../pages/inner-pages/shop/shop-elements/ProductDetails";
import SignIn from "../pages/inner-pages/shop/shop-elements/SignIn";
import SignUp from "../pages/inner-pages/shop/shop-elements/SignUp";
import WishList from "../pages/inner-pages/shop/shop-elements/WishList";

// All Portfolio main and inner pages
import PortfolioV1 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV1";
import PortfolioV10 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV10";
import PortfolioV11 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV11";
import PortfolioV12 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV12";
import PortfolioV2 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV2";
import PortfolioV3 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV3";
import PortfolioV4 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV4";
import PortfolioV5 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV5";
import PortfolioV6 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV6";
import PortfolioV7 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV7";
import PortfolioV8 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV8";
import PortfolioV9 from "../pages/inner-pages/portfolio/boxed-layout/PortfolioV9";
import PortfolioV22 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV22";
import PortfolioV13 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV13";
import PortfolioV14 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV14";
import PortfolioV15 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV15";
import PortfolioV16 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV16";
import PortfolioV17 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV17";
import PortfolioV18 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV18";
import PortfolioV19 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV19";
import PortfolioV20 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV20";
import PortfolioV21 from "../pages/inner-pages/portfolio/fullwidth-layout/PortfolioV21";

import PortfolioV23 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV23";
import PortfolioV24 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV24";
import PortfolioV25 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV25";
import PortfolioV26 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV26";
import PortfolioV27 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV27";
import PortfolioV28 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV28";
import PortfolioV29 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV29";
import PortfolioV30 from "../pages/inner-pages/portfolio/dark-layout/PortfolioV30";
import PortfolioDetailsV1 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV1";
import PortfolioDetailsV2 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV2";
import PortfolioDetailsV3 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV3";
import PortfolioDetailsV4 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV4";
import PortfolioDetailsV5 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV5";
import PortfolioDetailsV6 from "../pages/inner-pages/portfolio/single-portfolio/PortfolioDetailsV6";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* All home */}
        <Route path="/" element={<StartupAgency />} />
        <Route path="/business" element={<Business />} />
        <Route path="/agency-minimal" element={<AgencyMinimal />} />
        <Route path="/service-provider" element={<ServiceProvider />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/startup-agency" element={<StartupAgency />} />
        <Route path="/consulting-agency" element={<ConsultingAgency />} />
        <Route
          path="/photographer-portfolio"
          element={<PhotographerPortfolio />}
        />
        <Route path="/designer-portfolio" element={<DesignerPortfolio />} />
        <Route path="/marketing-agency" element={<MarketingAgency />} />
        <Route
          path="/design-agency-portfolio"
          element={<DesignAgencyPortfolio />}
        />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* elements dropdown Header pages */}
        <Route path="/ui-header-v1" element={<UiHeaderV1 />} />
        <Route path="/ui-header-v2" element={<UiHeaderV2 />} />
        <Route path="/ui-header-v3" element={<UiHeaderV3 />} />
        <Route path="/ui-header-v4" element={<UiHeaderV4 />} />
        <Route path="/ui-header-v5" element={<UiHeaderV5 />} />
        <Route path="/ui-header-v6" element={<UiHeaderV6 />} />
        <Route path="/ui-header-v7" element={<UiHeaderV7 />} />

        {/* elements dropdown Basic pages */}
        <Route path="/ui-menu-v1" element={<UiMenuV1 />} />
        <Route path="/ui-menu-v2" element={<UiMenuV2 />} />
        <Route path="/ui-menu-v3" element={<UiMenuV3 />} />
        <Route path="/ui-menu-v4" element={<UiMenuV4 />} />
        <Route path="/ui-blog-post" element={<UiBlogPost />} />
        <Route path="/ui-buttons" element={<UiButtons />} />
        <Route path="/ui-contact" element={<UiContact />} />

        {/* portfolio dropdown Essentials pages */}
        {/* Boxed Layout  */}
        <Route path="/portfolio-v1" element={<PortfolioV1 />} />
        <Route path="/portfolio-v2" element={<PortfolioV2 />} />
        <Route path="/portfolio-v3" element={<PortfolioV3 />} />
        <Route path="/portfolio-v4" element={<PortfolioV4 />} />
        <Route path="/portfolio-v5" element={<PortfolioV5 />} />
        <Route path="/portfolio-v6" element={<PortfolioV6 />} />
        <Route path="/portfolio-v7" element={<PortfolioV7 />} />
        <Route path="/portfolio-v8" element={<PortfolioV8 />} />
        <Route path="/portfolio-v9" element={<PortfolioV9 />} />
        <Route path="/portfolio-v10" element={<PortfolioV10 />} />
        <Route path="/portfolio-v11" element={<PortfolioV11 />} />
        <Route path="/portfolio-v12" element={<PortfolioV12 />} />
        <Route path="/portfolio-v13" element={<PortfolioV13 />} />
        <Route path="/portfolio-v14" element={<PortfolioV14 />} />
        <Route path="/portfolio-v15" element={<PortfolioV15 />} />
        <Route path="/portfolio-v16" element={<PortfolioV16 />} />
        <Route path="/portfolio-v17" element={<PortfolioV17 />} />
        <Route path="/portfolio-v18" element={<PortfolioV18 />} />
        <Route path="/portfolio-v19" element={<PortfolioV19 />} />
        <Route path="/portfolio-v20" element={<PortfolioV20 />} />
        <Route path="/portfolio-v21" element={<PortfolioV21 />} />
        <Route path="/portfolio-v22" element={<PortfolioV22 />} />
        <Route path="/portfolio-v23" element={<PortfolioV23 />} />
        <Route path="/portfolio-v24" element={<PortfolioV24 />} />
        <Route path="/portfolio-v25" element={<PortfolioV25 />} />
        <Route path="/portfolio-v26" element={<PortfolioV26 />} />
        <Route path="/portfolio-v27" element={<PortfolioV27 />} />
        <Route path="/portfolio-v28" element={<PortfolioV28 />} />
        <Route path="/portfolio-v29" element={<PortfolioV29 />} />
        <Route path="/portfolio-v30" element={<PortfolioV30 />} />

        {/* Single Portfolio Details  */}
        <Route path="/portfolio-details-v1" element={<PortfolioDetailsV1 />} />
        <Route path="/portfolio-details-v2" element={<PortfolioDetailsV2 />} />
        <Route path="/portfolio-details-v3" element={<PortfolioDetailsV3 />} />
        <Route path="/portfolio-details-v4" element={<PortfolioDetailsV4 />} />
        <Route path="/portfolio-details-v5" element={<PortfolioDetailsV5 />} />
        <Route path="/portfolio-details-v6" element={<PortfolioDetailsV6 />} />

        {/* pages dropdown Essentials pages */}
        {/* Essentials */}
        <Route path="/about-v1" element={<AboutUsV1 />} />
        <Route path="/about-v2" element={<AboutUsV2 />} />
        <Route path="/team-v1" element={<TeamV1 />} />
        <Route path="/team-v2" element={<TeamV2 />} />
        <Route path="/pricing-v1" element={<PricingV1 />} />
        <Route path="/pricing-v2" element={<PricingV2 />} />

        {/* Support */}
        <Route path="/contact-v1" element={<ContactV1 />} />
        <Route path="/contact-v2" element={<ContactV2 />} />
        <Route path="/contact-v3" element={<ContactV3 />} />

        {/* Others */}
        <Route path="/testimonial-v1" element={<TestimonialV1 />} />
        <Route path="/testimonial-v2" element={<TestimonialV2 />} />
        <Route path="/testimonial-v3" element={<TestimonialV3 />} />
        <Route path="/faq-v1" element={<FaqV1 />} />
        <Route path="/faq-v2" element={<FaqV2 />} />

        {/* Blog dropdown pages */}
        <Route path="/blog-v1" element={<BlogV1 />} />
        <Route path="/blog-v2" element={<BlogV2 />} />
        <Route path="/blog-v3" element={<BlogV3 />} />
        <Route path="/blog-v4" element={<BlogV4 />} />
        <Route path="/blog-details-v1" element={<BlogDetailsV1 />} />
        <Route path="/blog-details-v2" element={<BlogDetailsV2 />} />
        <Route path="/blog-details-v3" element={<BlogDetailsV3 />} />
        <Route path="/blog-details/:id" element={<DynamicBlogDetails />} />
        <Route path="/service-v1" element={<ServiceV1 />} />
        <Route path="/service-v2" element={<ServiceV2 />} />
        <Route path="/service-v3" element={<ServiceV3 />} />

        {/* All Shop page */}
        <Route path="/shop-standard" element={<ShopStandard />} />
        <Route path="/grid-layout" element={<GridLayout />} />
        <Route path="/grid-sidebar" element={<GridWithSidebar />} />
        <Route path="/dark-sidebar-grid" element={<DarkGridWithSidebar />} />
        <Route
          path="/grid-layout-fullwidth"
          element={<GridLayoutFullWidth />}
        />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route
          path="/product-details/:id"
          element={<DynamicProductDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
