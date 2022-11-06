import React from "react";
import { Route, Routes } from "react-router-dom";

// All Home Version
import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";
import StartupAgency from "../pages/home-pages/StartupAgency";
import NotFound from "../pages/NotFound";

// All Elements  dropdown Heading inner pages

// All Elements  dropdown Menu inner pages

// All Blog dropdown inner pages

// All Pages dropdown inner pages

// All Shop main and inner pages

// All Portfolio main and inner pages

const AllRoutes = (props) => {
   return (
      <>
         <ScrollTopBehaviour />
         <Routes>
            {/* All home */}
            <Route path="/" element={<StartupAgency />} />
            {/* <Route path="/business" element={<Business />} />
        <Route path="/agency-minimal" element={<AgencyMinimal />} />
        <Route path="/service-provider" element={<ServiceProvider />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/startup-agency" element={<StartupAgency />} />
        <Route path="/consulting-agency" element={<ConsultingAgency />} /> */}
            {/* <Route
          path="/photographer-portfolio"
          element={<PhotographerPortfolio />}
        />
        <Route path="/designer-portfolio" element={<DesignerPortfolio />} />
        <Route path="/marketing-agency" element={<MarketingAgency />} />
        <Route
          path="/design-agency-portfolio"
          element={<DesignAgencyPortfolio />}
        /> */}
            {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}

            {/* elements dropdown Header pages */}
            {/* <Route path="/ui-header-v1" element={<UiHeaderV1 />} />
        <Route path="/ui-header-v2" element={<UiHeaderV2 />} />
        <Route path="/ui-header-v3" element={<UiHeaderV3 />} />
        <Route path="/ui-header-v4" element={<UiHeaderV4 />} />
        <Route path="/ui-header-v5" element={<UiHeaderV5 />} />
        <Route path="/ui-header-v6" element={<UiHeaderV6 />} />
        <Route path="/ui-header-v7" element={<UiHeaderV7 />} /> */}

            {/* elements dropdown Basic pages */}
            {/* <Route path="/ui-menu-v1" element={<UiMenuV1 />} />
        <Route path="/ui-menu-v2" element={<UiMenuV2 />} />
        <Route path="/ui-menu-v3" element={<UiMenuV3 />} />
        <Route path="/ui-menu-v4" element={<UiMenuV4 />} />
        <Route path="/ui-blog-post" element={<UiBlogPost />} />
        <Route path="/ui-buttons" element={<UiButtons />} />
        <Route path="/ui-contact" element={<UiContact />} /> */}

            {/* portfolio dropdown Essentials pages */}
            {/* Boxed Layout  */}
            {/* <Route path="/portfolio-v1" element={<PortfolioV1 />} />
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
        <Route path="/portfolio-v30" element={<PortfolioV30 />} /> */}

            {/* Single Portfolio Details  */}
            {/* <Route path="/portfolio-details-v1" element={<PortfolioDetailsV1 />} />
        <Route path="/portfolio-details-v2" element={<PortfolioDetailsV2 />} />
        <Route path="/portfolio-details-v3" element={<PortfolioDetailsV3 />} />
        <Route path="/portfolio-details-v4" element={<PortfolioDetailsV4 />} />
        <Route path="/portfolio-details-v5" element={<PortfolioDetailsV5 />} />
        <Route path="/portfolio-details-v6" element={<PortfolioDetailsV6 />} /> */}

            {/* pages dropdown Essentials pages */}
            {/* Essentials */}
            {/* <Route path="/about-v1" element={<AboutUsV1 />} />
        <Route path="/about-v2" element={<AboutUsV2 />} />
        <Route path="/team-v1" element={<TeamV1 />} />
        <Route path="/team-v2" element={<TeamV2 />} />
        <Route path="/pricing-v1" element={<PricingV1 />} />
        <Route path="/pricing-v2" element={<PricingV2 />} /> */}

            {/* Support */}
            {/* <Route path="/contact-v1" element={<ContactV1 />} />
        <Route path="/contact-v2" element={<ContactV2 />} />
        <Route path="/contact-v3" element={<ContactV3 />} /> */}

            {/* Others */}
            {/* <Route path="/testimonial-v1" element={<TestimonialV1 />} />
        <Route path="/testimonial-v2" element={<TestimonialV2 />} />
        <Route path="/testimonial-v3" element={<TestimonialV3 />} />
        <Route path="/faq-v1" element={<FaqV1 />} />
        <Route path="/faq-v2" element={<FaqV2 />} /> */}

            {/* Blog dropdown pages */}
            {/* <Route path="/blog-v1" element={<BlogV1 />} />
        <Route path="/blog-v2" element={<BlogV2 />} />
        <Route path="/blog-v3" element={<BlogV3 />} />
        <Route path="/blog-v4" element={<BlogV4 />} />
        <Route path="/blog-details-v1" element={<BlogDetailsV1 />} />
        <Route path="/blog-details-v2" element={<BlogDetailsV2 />} />
        <Route path="/blog-details-v3" element={<BlogDetailsV3 />} />
        <Route path="/blog-details/:id" element={<DynamicBlogDetails />} />
        <Route path="/service-v1" element={<ServiceV1 />} />
        <Route path="/service-v2" element={<ServiceV2 />} />
        <Route path="/service-v3" element={<ServiceV3 />} /> */}

            {/* All Shop page */}
            {/* <Route path="/shop-standard" element={<ShopStandard />} />
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
        <Route path="/sign-up" element={<SignUp />} /> */}

            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
};

export default AllRoutes;
