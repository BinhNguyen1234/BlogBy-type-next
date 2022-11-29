import { ReactElement } from 'react';
import Style from '../../styles/components/Modal/ModalDialog.module.sass';
import CloseBtn from './CloseBtn';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../feature';
export default function ModalDialog(): ReactElement {
   const state = useSelector((state:RootStateType)=>{return state.ModalControl})
   return (
      <>
         <div onClick={(e)=>{e.stopPropagation()}} id={Style.ModalDialog}>
            <CloseBtn></CloseBtn>
            <div>{state.title}</div>
            <hr></hr>
            <div>{state.content}</div>
            <hr></hr>
            <button style={{width: "15%"}} onClick={(e)=>{state.action()}} type="button" className="btn btn-primary">Ok</button>
         </div>
      </>
   );
}
