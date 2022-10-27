import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Seo from "../../../../components/common/seo/Seo";
import Header from "../../../../components/shop-standard/Header";
import { wishlistItems } from "../../../../redux/features/wishlist-slice";
import SingleWishlist from "./components/cart/SingleWishlist";

const WishList = () => {
  const wishlistProducts = useSelector(wishlistItems);
  return (
    <div className="main-page-wrapper">
      <Seo title="Wish List" />
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
        Wishlit Page
        ============================================== 
        --> */}
      <div className="cart-section pt-250 pb-100 lg-pt-150 sm-pb-50 border-bottom">
        <div className="container">
          {wishlistProducts.length === 0 && (
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h3>Your wishlist is empty</h3>
                <Link
                  to="/grid-layout-fullwidth"
                  className="theme-btn-seven mt-25"
                >
                  Return to shop
                </Link>
              </div>
            </div>
          )}
          {wishlistProducts.length > 0 && (
            <form action="#" className="cart-list-form">
              <div className="table-responsive">
                <SingleWishlist />
              </div>
              {/* <!-- /.table-responsive --> */}
            </form>
          )}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.cart-section --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default WishList;
