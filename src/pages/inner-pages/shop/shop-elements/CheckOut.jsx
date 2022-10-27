import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Seo from "../../../../components/common/seo/Seo";
import Header from "../../../../components/shop-standard/Header";
import BillingDetails from "./components/checkout/BillingDetails";
import ExistingUser from "./components/checkout/ExistingUser";
import OrderDetails from "./components/checkout/OrderDetails";

const CheckOut = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Checkout" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header />

      {/* <!-- 
        =============================================
            CheckOut Page
        ============================================== 
        --> */}
      <div className="checkout-section pt-250 pb-100 lg-pt-150 sm-pb-50">
        <div className="container">
          <ExistingUser />
          {/* <!-- /.checkout-toggle-area --> */}
          <form action="#" className="checkout-form">
            <div className="row">
              <BillingDetails />
              {/* <!-- /.col- --> */}

              <OrderDetails />
            </div>
            {/* <!-- /.row --> */}
          </form>
          {/* <!-- /.checkout-form --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.checkout-section --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default CheckOut;
