import {createSlice} from '@reduxjs/toolkit';

interface SubmitBtnStateStype {
  status: string;
  spinnerIsHide: string;
  message: string;
  color: string;
  disabled: boolean;
}
const initialState: SubmitBtnStateStype = {
  status: 'Login',
  spinnerIsHide: 'hidden',
  message: '',
  color: 'btn-primary',
  disabled: false,
};

const UISubmitBtnSlice = createSlice({
  name: 'UISubmitBtn',
  initialState,
  reducers: {
    handleUI: (state, action) => {
      if (action.payload.type == 'SEND') {
        return {
          color: 'btn-warning',
          message: '',
          spinnerIsHide: '',
          status: 'Loading..',
          disabled: true,
        };
      } else if (action.payload.type == 'FAILED') {
        return {
          color: 'btn-danger',
          message: action.payload.message,
          spinnerIsHide: 'hidden',
          status: 'Try Again',
          disabled: false,
        };
      } else if (action.payload.type == 'SUCCESS') {
        return {
          color: 'btn-primary',
          message: '',
          status: 'Login',
          spinnerIsHide: 'hidden',
          disabled: false,
        };
      }
    },
  },
});
export const {handleUI} = UISubmitBtnSlice.actions;
export default UISubmitBtnSlice.reducer;
