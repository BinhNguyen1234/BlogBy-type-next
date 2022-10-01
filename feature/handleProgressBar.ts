import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    valueNow : number,
    display: string
    
}
const initialState:StateType = {
    valueNow: 0,
    display: "none"
    
}
const handleProgressBar = createSlice({
    name: "handleProgressBar",
    initialState,
    reducers :{
        handleUiProgress: (state, action)=>{
            if(action.payload.type === "50%"){
                return {
                    valueNow: 50,
                    display: "flex"
                    
                }
            } else if (action.payload.type === "100%"){
                return {
                    valueNow: 100,
                    display: "none"
                    
                }
            }
            else if (action.payload.type === "RESET"){
                return {
                    valueNow: 0,
                    display: "none"
                    
                }
            }
        }
    }
})
export const {handleUiProgress} = handleProgressBar.actions
export default handleProgressBar.reducer