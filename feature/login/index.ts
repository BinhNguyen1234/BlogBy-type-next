import { createSlice } from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"


interface LoginState {
    isAuth: boolean;
}

const initialState: LoginState = {
    isAuth: false
}
const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        LOGIN : (state, action) =>{
            return {
                isAuth : true
            }
        },
        LOGOUT : (state, action)=>{
            return {
                isAuth : false
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(HYDRATE,(state,action)=>{
            return {...state, ...action}
        })
    }
    
})



export default loginSlice.reducer;
export const {LOGIN, LOGOUT} = loginSlice.actions