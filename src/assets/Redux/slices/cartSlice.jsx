import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)

        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            return state.filter(item => item.id !== itemId);
        },
    
}

})

export const  {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;