import { ReactElement } from "react";
import Style from "../../styles/components/Modal/CloseBtnModal.module.sass"
import { useDispatch } from "react-redux";
import { closeModal } from "../../feature/ModalControl";
export default function CloseBtn():ReactElement{
    const dispatch = useDispatch()
    return <>
        <div role="button" onClick={()=>{dispatch(closeModal(null))}} id={Style.CloseBtnModal}>
            <div></div>
            <div></div>
        </div>
    </>
}