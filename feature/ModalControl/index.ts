import { createSlice } from '@reduxjs/toolkit';
interface ModalControlStateType {
   title: string;
   content: string;
   action?:  any;
   hidden: boolean;
}
const initialState: ModalControlStateType = {
   title: '',
   content: '',
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
            title: action.payload.title,
            content: action.payload.content,
            action: action.payload.action,
            hidden: false,
         };
      },
   },
});
export default ModalControl.reducer;
export const { closeModal, showModal } = ModalControl.actions;
