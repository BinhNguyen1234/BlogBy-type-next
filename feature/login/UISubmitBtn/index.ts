import { createSlice } from "@reduxjs/toolkit";

interface SubmitBtnStateStype {
    status: string,
    spinnerIsHide: string,
}
const initialState: SubmitBtnStateStype ={
    status: "Login",
    spinnerIsHide: "hidden",
}

const UISubmitBtnSlice = createSlice({
    name: "UISubmitBtn",
    initialState,
    reducers:{
        handleUI: (state,action)=>{
            if(action.payload.type=="SEND"){
                return {
                    spinnerIsHide: "",
                    status: "Loading.."
                }
            }else if (action.type=="FAILED"){
                return {
                    spinnerIsHide: "hidden",
                    status: "Failded" 
                }
            }

        }
    }
})
export const {handleUI} = UISubmitBtnSlice.actions
export default UISubmitBtnSlice.reducer