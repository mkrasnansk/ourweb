import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import useProducts from "../../../../hooks/use-products";
import { cart_product } from "../../../../redux/features/cart-slice";
import { add_to_wishlist } from "../../../../redux/features/wishlist-slice";

const ProductV3 = () => {
  const { products } = useProducts();
  const dispatch = useDispatch()

  const handleAddToCart = (item) => {
    dispatch(cart_product(item))
  }
  return (
    <>
      {products.slice(8,16).map((item) => (
        <div
          className="col-xxl-3 col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.animationTime}
          key={item.id}
        >
          <div className="product-block-two mb-60 xs-mb-40">
            <div className="img-holder style-two">
              <Link
                to={`/product-details/${item.id}`}
                className="d-flex align-items-center justify-content-center h-100"
              >
                <img
                  src={item.img}
                  alt="filtering product"
                  className="product-img tran4s"
                />
              </Link>
              <button onClick={()=> dispatch(add_to_wishlist(item))} className="cart-icon">
                <i className="bi bi-suit-heart"></i>
              </button>
              {/* wishlist */}

              <button onClick={() => handleAddToCart(item)} className="cart-button">
              Add to cart</button>
              {/* add to cart */}
            </div>
            {/* <!-- /.img-holder --> */}
            <div className="product-meta">
              <div className="d-lg-flex align-items-center justify-content-between">
                <Link to={`/product-details/${item.id}`} className="product-title">
                  {item.title}
                </Link>
                <ul className="style-none d-flex rating">{item.ratings}</ul>
              </div>
              <div className="price">${item.price}</div>
            </div>
            {/* <!-- /.product-meta --> */}
          </div>
          {/* <!-- /.product-block-two --> */}
        </div>
      ))}
    </>
  );
};

export default ProductV3;
