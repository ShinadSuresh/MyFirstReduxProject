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

        DealerAddProduct: (state, action) => {
            state.push(action.payload);
        },

        updateProduct: (state, action) => {
            const { id, image, title, price } = action.payload;
            const productToUpdate = state.find((item) => item.id === id);
            if (productToUpdate) {
                productToUpdate.id = id;
              productToUpdate.image = image;
              productToUpdate.title = title;
              productToUpdate.price = price;
            }
        },
        viewedProduct: (state,action) =>  {
            return{...action.payload}   
    },
    }
})

export const { productList, removeProduct, DealerAddProduct, updateProduct } =productSlice.actions;
export default productSlice.reducer