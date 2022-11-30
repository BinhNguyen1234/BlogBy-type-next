import ModalDialog from './ModalDialog';
import { ReactElement } from 'react';
import Style from '../../styles/components/Modal/Modal.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../feature/ModalControl';
import { RootStateType } from '../../feature';

export default function Modal(): ReactElement {
   const state = useSelector((state: RootStateType) => {
      return state.ModalControl;
   });
   const dispatch = useDispatch();
   return (
      <>
         {/*Modal fade */}
         <div
            onClick={(e) => {
               dispatch(closeModal(null));
            }}
            hidden={state.hidden}
            id={Style.Modal}
         >
            <ModalDialog></ModalDialog>
         </div>
      </>
   );
}
