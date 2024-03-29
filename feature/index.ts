import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSliceReducers from './login';
import UISubmitBtn from './login/UISubmitBtn';
import UISendPostBtn from './login/UISendPostBtn';
import handleProgessbar from '../feature/handleProgressBar';
import readMode from './readMode';
import { createWrapper } from 'next-redux-wrapper';
import ModalControl from './ModalControl';
const allReducers = combineReducers({
   handleProgessbar,
   loginSliceReducers,
   UISendPostBtn,
   UISubmitBtn,
   readMode,
   ModalControl,
});

const store = () => {
   return configureStore({
      reducer: allReducers,
   });
};

export type RootStateType = ReturnType<typeof allReducers>;
export const wrapper = createWrapper(store);
