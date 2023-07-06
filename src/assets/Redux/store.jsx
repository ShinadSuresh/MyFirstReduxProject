import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import viewproductSlice from "./slices/viewproductSlice";
import cartSlice from "./slices/cartSlice";
import AdminlogSlice from "./slices/AdminlogSlice";
import AdminaddSlice from "./slices/AadminProductadd";



const store = configureStore({
  reducer: {
    
    prdct: ProductSlice,
    view: viewproductSlice,
    cart: cartSlice,
    adminLogin: AdminlogSlice,
    adminAddproduct: AdminaddSlice,
    
  },
});

export default store;
