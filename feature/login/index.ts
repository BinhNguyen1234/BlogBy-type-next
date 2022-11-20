import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface LoginStateType {
   isAuth: boolean;
   infoUser: string;
   token: string | undefined;
}

const initialState: LoginStateType = {
   isAuth: false,
   infoUser: 'Loign',
   token: undefined
};
const loginSlice = createSlice({
   name: 'Login',
   initialState,
   reducers: {
      LOGINWITHTK: (state,action)=>{
         return (state = {
            token: action.payload.token,
            isAuth: true,
            infoUser: action.payload.username,
         });
      },
      LOGIN: (state, action) => {
         return (state = {
            ...state,
            isAuth: true,
            infoUser: action.payload,
         });
      },
      LOGOUT: (state, action) => {
         return (state = {
            isAuth: false,
            infoUser: 'Login',
            token: undefined
         });
      },
   },
   extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action) => {
         return { ...state, ...action };
      });
   },
});

export default loginSlice.reducer;
export const { LOGIN, LOGOUT,LOGINWITHTK } = loginSlice.actions;
