import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   actualUrl: localStorage.getItem("actual_url") ? JSON.parse(localStorage.getItem("actual_url")) : window.location.href,
};

export const urlSlice = createSlice({
   name: "url",
   initialState,
   reducers: {
      initialize_url: (state, { payload }) => {
         const url = payload;
         state.url = url;
         localStorage.setItem("actual_url", JSON.stringify(url));
      },
   },
});

export const { initialize_url } = urlSlice.actions;

export const actualUrl = (state) => state.url.actualUrl;
export default urlSlice.reducer;
