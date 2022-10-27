import React from "react";
import { useDispatch } from "react-redux";
import { cart_product } from "../../../../../../redux/features/cart-slice";
import { add_to_wishlist } from "../../../../../../redux/features/wishlist-slice";
import FilterByColor2 from "../../../components/sidebarFilter/FilterByColor2";
import FilterBySize from "../../../components/sidebarFilter/FilterBySize";
import Quantity from "../../../components/sidebarFilter/Quantity";

const ItemContent = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(cart_product(item))
  }
  return (
    <>
      <ul className="product-feature style-none">
        <li>Free delivery available</li>
        <li>Use promo-code and save up to 25%</li>
      </ul>

      <div className="customize-order">
        <div className="row">
          <div className="col-xxl-11">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="quantity mt-25">
                  <h6>Quantity</h6>
                  <Quantity item={product} />
                </div>
              </div>
              {/* End .col */}

              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="color-selection mt-25">
                  <h6>Colors</h6>
                  <ul className="style-none d-flex align-items-center color-custome-input">
                    <FilterByColor2 />
                  </ul>
                </div>
              </div>
              {/* End .col */}

              <div className="col-xl-5 col-md-6 col-sm-4">
                <div className="size-selection mt-25">
                  <h6>Size</h6>
                  <ul className="style-none d-flex align-items-center size-custome-input">
                    <FilterBySize />
                  </ul>
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.customize-order --> */}

      <div className="button-group mt-30 d-sm-flex align-items-center">
        <button onClick={() => handleAddToCart(product)} className="theme-btn-seven mt-15 me-sm-4 d-block">
          Add To Cart
        </button>
        <button className="theme-btn-nine mt-15 d-block" onClick={()=> dispatch(add_to_wishlist(product))}>
          Add To wishlist
        </button>
      </div>
      {/* End button-group */}
    </>
  );
};

export default ItemContent;
