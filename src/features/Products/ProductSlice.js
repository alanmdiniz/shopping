import { createSlice } from "@reduxjs/toolkit";
import { GetAllProducts, GetProductsSearch } from "./ProductService";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    error: null,
  },
  extraReducers: {
    [GetAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [GetAllProducts.rejected]: (state, action) => {
      state.products = [];
    },
    [GetProductsSearch.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [GetProductsSearch.rejected]: (state, action) => {
      state.products = [];
    },
  },
});

export default productSlice.reducer;