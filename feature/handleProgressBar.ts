import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resolveHref } from "next/dist/shared/lib/router/router";

const RESET = createAsyncThunk<number>("RESET", async ()=>{
    return await new Promise((resolve,reject)=>{

        try{setTimeout(()=>{
            resolve(0)
        },500)}
        catch(e){
            reject(e)
        }
    })

   
})

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
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(RESET.fulfilled,(state,action)=>{
            return {
                valueNow: action.payload
            }
        })
    },
})
export default handleProgressBar.reducer
export const {SEND, ACEPT, RENDERED} = handleProgressBar.actions
export {RESET}