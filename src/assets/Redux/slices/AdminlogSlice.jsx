import { createSlice } from "@reduxjs/toolkit";



const adminlogSlice = createSlice({
    name: 'adminLog',
    initialState: {
        loggedin:false,
        admin: {
            userName: 'shinadbp55@gmail.com',
            password: '12345678',
        },    
    },
    reducers: {
        login: (state) => {
            state.loggedin = true;
        },
        logout: (state) => {
            state.loggedin = false;
        },
    }
})

export const { login,logout } = adminlogSlice.actions;
export default adminlogSlice.reducer;