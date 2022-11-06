import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './features/cart-slice';
import productSlice from './features/product-slice';
import wishlistSlice from './features/wishlist-slice';
import urlSlice from './oweFeatures/url-slice';

const rootReducer = combineReducers({
  products:productSlice,
  cart:cartSlice,
  wishlist:wishlistSlice,
  url:urlSlice
})

export default rootReducer;