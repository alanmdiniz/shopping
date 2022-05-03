import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/Products/ProductSlice";
import userSlice from "../features/Users/UserSlice";
import orderSlice from "../features/Orders/OrderSlice";
import cartSlice from "../features/Cart/CartSlice";

export default configureStore({
  reducer: {
    products: productSlice,
    users: userSlice,
    orders: orderSlice,
    cart: cartSlice,
  },
});
