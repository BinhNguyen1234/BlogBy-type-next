import { ReactElement } from 'react';
import Style from '../../styles/components/Modal/ModalDialog.module.sass';
import CloseBtn from './CloseBtn';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../feature';
import { useDispatch } from 'react-redux';
import { closeModal, processModal } from '../../feature/ModalControl';
export default function ModalDialog(): ReactElement {
   const dispatch = useDispatch();
   const state = useSelector((state: RootStateType) => {
      return state.ModalControl;
   });
   return (
      <>
         <div
            onClick={(e) => {
               e.stopPropagation();
            }}
            id={Style.ModalDialog}
         >
            <CloseBtn></CloseBtn>
            <div>{state.title}</div>
            <hr></hr>
            <div>{state.content}</div>
            <hr></hr>
            <button
               style={{ width: '15%' }}
               onClick={(e) => {
                  dispatch(processModal(null));
                  state.action ? state.action() : dispatch(closeModal(null));
               }}
               type="button"
               disabled={state.status == 'btn-warning'}
               className={`btn ${state.status}`}
            >
               {state.nameAction}
            </button>
         </div>
      </>
   );
}
