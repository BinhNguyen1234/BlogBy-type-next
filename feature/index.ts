import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSliceReducers from "./login"
import UISubmitBtn from "./login/UISubmitBtn"
import UISendPostBtn from "./login/UISendPostBtn"
import { createWrapper } from "next-redux-wrapper"
const allReducers = combineReducers({
    loginSliceReducers,
    UISendPostBtn,
    UISubmitBtn,
    
})

const store = () =>{
   return configureStore({
        reducer: allReducers
    })
}
export type RootStateType = ReturnType<typeof allReducers>
export const wrapper = createWrapper(store)