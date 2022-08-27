import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSliceReducers from "./login"
import UISubmitBtn from "./login/UISubmitBtn"
import { createWrapper } from "next-redux-wrapper"
const allReducers = combineReducers({
    loginSliceReducers,
    UISubmitBtn
})

const store = () =>{
   return configureStore({
        reducer: allReducers
    })
}
export type RootStateType = ReturnType<typeof allReducers>
export const wrapper = createWrapper(store)