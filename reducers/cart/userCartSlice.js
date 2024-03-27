

import { createSlice } from "@reduxjs/toolkit";
import { fetchCartItems } from "./userCartApi";

const initialState = {
  activeCartItems: [],
  loading: false,
  error: null,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.activeCartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default cartItemsSlice.reducer;