import { createSlice } from "@reduxjs/toolkit";
interface SendPostBtnStateType {
    content: string,
    spinnerIsHide: string,
    isDisable: boolean
}
const initialState: SendPostBtnStateType ={
    content: "Send",
    spinnerIsHide: "hidden",
    isDisable: false
}

const UISendPostBtnSlice = createSlice({
    name: "UISendPostBtn",
    initialState,
    reducers:{
        WAITTING: (action)=>{
            return {
                content: "Loading",
                spinnerIsHide: "",
                isDisable: true
            }
        },
        SUCCESS: (action)=>{
            return {
                content: "Success",
                spinnerIsHide: "hidden",
                isDisable: true
            }
        }
    }
})
export default UISendPostBtnSlice.reducer
export const {WAITTING, SUCCESS} = UISendPostBtnSlice.actions