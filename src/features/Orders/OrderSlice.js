import { createSlice } from "@reduxjs/toolkit";
import { CreateOrder } from "./OrderService";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    error: null,
  },
  extraReducers: {
    [CreateOrder.fulfilled]: (state, action) => {
      state.orders.unshift(action.payload);
    },
  },
});

export const { add, remove } = orderSlice.actions;

export default orderSlice.reducer;
