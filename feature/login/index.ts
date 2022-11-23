import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import jwt from 'jsonwebtoken';
import { getCookie } from '../../ulitlity/ManupulateCookie';
export interface LoginStateType {
   isAuth: boolean;
   infoUser: string | null;
   token: string | undefined;
}
const parseToken = () => {
   const cookie = getCookie('rf');
   if (cookie) {
      const { username } = jwt.decode(cookie) as { username: string };
      return username;
   } else {
      return null;
   }
};
const initialState: LoginStateType = {
   isAuth: false,
   infoUser: 'Login',
   token: undefined,
};
const loginSlice = createSlice({
   name: 'Login',
   initialState,
   reducers: {
      LOGINWITHTK: (state, action) => {
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
            token: undefined,
         });
      },
      RELOGIN: (state, action) => {
         return { ...state, infoUser: 'Login' };
      },
   },
   extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action) => {
         return { ...state, ...action };
      });
   },
});

export default loginSlice.reducer;
export const { LOGIN, LOGOUT, RELOGIN, LOGINWITHTK } = loginSlice.actions;
