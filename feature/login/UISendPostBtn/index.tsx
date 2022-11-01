import {createSlice} from '@reduxjs/toolkit';
interface SendPostBtnStateType {
  content: string;
  spinnerIsHide: string;
  isDisable: boolean;
  message: string;
  color: string;
}
const initialState: SendPostBtnStateType = {
  content: 'Send',
  spinnerIsHide: 'none',
  isDisable: false,
  message: '',
  color: 'btn-primary',
};

const UISendPostBtnSlice = createSlice({
  name: 'UISendPostBtn',
  initialState,
  reducers: {
    handleSendPostBtn: (state, action) => {
      if (action.payload.type === 'WAITTING') {
        return (state = {
          message: '',
          content: 'Loading',
          spinnerIsHide: 'initial',
          isDisable: true,
          color: 'btn-warning',
        });
      } else if (action.payload.type === 'SUCCESS') {
        return (state = {
          message: '',
          content: 'Sucess',
          spinnerIsHide: 'none',
          isDisable: true,
          color: 'btn-success',
        });
      } else if (action.payload.type === 'FAILED') {
        return (state = {
          message: action.payload.message,
          content: 'TRY AGAIN',
          spinnerIsHide: 'none',
          isDisable: false,
          color: 'btn-danger',
        });
      } else if (action.payload.type === 'INITIAL') {
        return (state = {
          content: 'Send',
          spinnerIsHide: 'none',
          isDisable: false,
          message: '',
          color: 'btn-primary',
        });
      }
    },
  },
});
export default UISendPostBtnSlice.reducer;
export const {handleSendPostBtn} = UISendPostBtnSlice.actions;
