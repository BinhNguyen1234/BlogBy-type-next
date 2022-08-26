import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginSliceReducers from "./login"
import { createWrapper } from "next-redux-wrapper"
const allReducers = combineReducers({
    loginSliceReducers
})

const store = () =>{
   return configureStore({
        reducer: allReducers
    })
}
export type RootStateType = ReturnType<typeof allReducers>
export const wrapper = createWrapper(store)