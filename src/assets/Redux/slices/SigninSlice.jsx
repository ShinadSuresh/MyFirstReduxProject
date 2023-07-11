import { createSlice } from "@reduxjs/toolkit";


const SigninSlice = createSlice({
    name: 'signin',
    initialState: [],
    reducers: {
        addUser : (state, action) => {
            state.push(action.payload);
        },

        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.find((user) => user.email === email && user.password === password);
            if (user) {
                user.isLoggedIn = true;
            }
        },
        setAdminData: (state, action) => {
            return [...action.payload];
        }

    }
})

export const {addUser, loginUser, setAdminData} = SigninSlice.actions;
export default SigninSlice.reducer;