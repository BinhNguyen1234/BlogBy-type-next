import { createSlice } from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"


export interface LoginStateType {
    isAuth: boolean,
    infoUser: string
}

const initialState: LoginStateType = {
    isAuth: false,
    infoUser: "Loign"
}
const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        LOGIN : (state, action) =>{
            return {
                isAuth : true,
                infoUser: action.payload
            }
        },
        LOGINSSR: (state,action)=>{
            return {
                isAuth: action.payload.isAuth,
                infoUser: action.payload.infoUser
            }
        },
        LOGOUT : (state, action)=>{
            return {
                isAuth : false,
                infoUser: "Login"
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
export const {LOGIN, LOGOUT, LOGINSSR} = loginSlice.actions