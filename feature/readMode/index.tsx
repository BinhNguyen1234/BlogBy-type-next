import {createSlice} from '@reduxjs/toolkit';
import {initial} from 'lodash';

interface ReadModeStateType {
  read: boolean;
}
const initialState = {
  read: false,
};
const readMode = createSlice({
  name: 'readMode',
  initialState,
  reducers: {
    handleReadMode: (state, action) => {
      console.log('call');
      return {read: true};
    },
    handleReadModeFalse: (state, action) => {
      return {read: false};
    },
  },
});

export default readMode.reducer;
export const {handleReadMode, handleReadModeFalse} = readMode.actions;
