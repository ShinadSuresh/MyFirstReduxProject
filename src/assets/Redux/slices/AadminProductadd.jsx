import { createSlice } from "@reduxjs/toolkit";


const AdminaddSlice = createSlice({
    name: 'productadd',
    initialState: [],
    reducers: {
        adminAddProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state,action) => {
            const {id}= action.payload;
            return state.filter((e) => e.id !== id)
        }
    }
})

export const { addProduct, removeProduct } = AdminaddSlice.actions;
export default AdminaddSlice.reducer;