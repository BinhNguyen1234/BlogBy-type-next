import { createSlice } from '@reduxjs/toolkit';
interface ModalControlStateType {
   title: string;
   content: string;
   action?: any;
   hidden: boolean;
   nameAction: string;
   status: string;
}
const initialState: ModalControlStateType = {
   title: '',
   content: '',
   nameAction: 'Ok',
   status: 'btn-primary',
   action: null,
   hidden: true,
};
const ModalControl = createSlice({
   name: 'ModalControl',
   initialState,
   reducers: {
      closeModal: (state, action) => {
         return { ...state, hidden: true };
      },
      showModal: (state, action) => {
         return {
            nameAction: action.payload.nameAction || state.nameAction,
            status: 'btn-primary',
            title: action.payload.title,
            content: action.payload.content,
            action: action.payload.action,
            hidden: false,
         };
      },
      processModal: (state, action) => {
         return {
            ...state,
            status: 'btn-warning',
            nameAction: 'Waiting...',
         };
      },
   },
});
export default ModalControl.reducer;
export const { closeModal, showModal, processModal } = ModalControl.actions;
