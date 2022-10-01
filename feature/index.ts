import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSliceReducers from "./login"
import UISubmitBtn from "./login/UISubmitBtn"
import UISendPostBtn from "./login/UISendPostBtn"
import handleProgressBar from "./handleProgressBar"
import { createWrapper } from "next-redux-wrapper"
const allReducers = combineReducers({
    loginSliceReducers,
    UISendPostBtn,
    UISubmitBtn,
    handleProgressBar
})

const store = () =>{
   return configureStore({
        reducer: allReducers
    })
}
export type RootStateType = ReturnType<typeof allReducers>
export const wrapper = createWrapper(store)