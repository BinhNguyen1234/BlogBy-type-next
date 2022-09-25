import { createSlice } from "@reduxjs/toolkit";

interface SubmitBtnStateStype {
    status: string,
    spinnerIsHide: string,
    message: string
}
const initialState: SubmitBtnStateStype ={
    status: "Login",
    spinnerIsHide: "hidden",
    message: ""
}

const UISubmitBtnSlice = createSlice({
    name: "UISubmitBtn",
    initialState,
    reducers:{
        handleUI: (state,action)=>{
            if(action.payload.type=="SEND"){
                return {
                    ...state,
                    spinnerIsHide: "",
                    status: "Loading.."
                }
            }else if (action.payload.type=="FAILED"){
                return {
                    message: action.payload.message,
                    spinnerIsHide: "hidden",
                    status: "Login" 
                }
            }else if (action.payload.type=="SUCCESS"){
                return {
                    ...state,
                    status: "Login",
                    spinnerIsHide: "hidden",
                }                
            }

        }
    }
})
export const {handleUI} = UISubmitBtnSlice.actions
export default UISubmitBtnSlice.reducer