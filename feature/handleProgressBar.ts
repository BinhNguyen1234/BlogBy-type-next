import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    valueNow : number,
}
const initialState:StateType = {
    valueNow: 0,
}
const handleProgressBar = createSlice({
    name: "handleProgressBar",
    initialState,
    reducers :{
        SEND: (state, action)=>{
            return {
                    valueNow: 10
                } 
        },
        ACEPT: (state,action)=>{
            return {
                valueNow : 50
            }
        },
        RENDERED: (state, action)=>{
            return {
                valueNow: 100
            }
        },
        RESET: (state, action)=>{
            return {
                valueNow: 0
            }
        }
    }
})
export default handleProgressBar.reducer
export const {SEND, ACEPT, RENDERED, RESET} = handleProgressBar.actions