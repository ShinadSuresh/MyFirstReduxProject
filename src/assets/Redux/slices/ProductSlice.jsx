import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        productList: (state, action) => {
            state.length = 0;
            state.push(...action.payload); 
        },

        removeProduct: (state, action) => {
            const { id } = action.payload;
            return state.filter((items) => items.id !== id);
        },
    }
})

export const { productList } =productSlice.actions;
export default productSlice.reducer