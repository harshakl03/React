import { configureStore } from "@reduxjs/toolkit";
import userStore from "./features/user/userSlice";
import cartStore from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userStore,
    cart: cartStore,
  },
});

export default store;
