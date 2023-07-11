import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import cartSlice from "./slices/cartSlice";
import AdminlogSlice from "./slices/AdminlogSlice";
import SigninSlice from "./slices/SigninSlice";




const store = configureStore({
  reducer: {
    
    prdct: ProductSlice,
    cart: cartSlice,
    adminLogin: AdminlogSlice,
    signin: SigninSlice,
    

      
  },
});

export default store;
