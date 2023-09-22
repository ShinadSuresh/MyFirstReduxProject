import { createSlice } from "@reduxjs/toolkit";



const adminlogSlice = createSlice({
    name: 'adminLog',
    initialState: {
        loggedin:false,
           
    },
    reducers: {
        adminlogin: (state) => {
            state.loggedin = true;
        },
        adminlogout: (state) => {
            state.loggedin = false;
        },
    }
})

export const { adminlogin,adminlogout } = adminlogSlice.actions;
export default adminlogSlice.reducer;