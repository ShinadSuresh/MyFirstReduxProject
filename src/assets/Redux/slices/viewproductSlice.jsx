import { createSlice } from "@reduxjs/toolkit";



const viewproductSlice = createSlice({
    name: 'view',
    initialState: [],
    reducers: {
        viewedProduct: (state ={},action) =>  {
            return{...action.payload}   
    }
    },
})

export const {viewedProduct} = viewproductSlice.actions;
export default viewproductSlice.reducer;