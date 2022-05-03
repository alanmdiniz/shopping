import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    email: "",
    error: null,
  },

  reducers: {
    cartAdd: (state, action) => {
      if (
        state.cartProducts.some(
          (item) => item.product.id === action.payload.product.id
        )
      ) {
        state.cartProducts = state.cartProducts.map((item) => {
          if (item.product.id !== action.payload.product.id) {
            return item;
          } else {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
        });
      } else {
        state.cartProducts.unshift(action.payload);
      }
    },
    cartRemove: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.product.id !== action.payload.productId
      );
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    cleanCart: (state, action) => {
      state.email = "";
      state.cartProducts = [];
    },
  },
});

export const { cartAdd, cartRemove, setEmail, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
