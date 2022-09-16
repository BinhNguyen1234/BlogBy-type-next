
import React from "react";
import style from "../styles/components/Login/SubmitBtn.module.sass"
import { useSelector, useDispatch } from "react-redux";
import {RootStateType} from "../feature"
import {memo} from "react"
interface Props {
    onClick: React.MouseEventHandler
}
import {handleUI} from "../feature/login/UISubmitBtn";
function SubmitBtn ({onClick}:Props):JSX.Element{
    
    const stateBtn = useSelector((state:RootStateType)=>{return state.UISubmitBtn})
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={(e)=>{
                onClick(e);
                dispatch(handleUI({type:"SEND"}))
                }} id={style.Submitbtn} className="btn btn-primary" type="submit">
                <div className={stateBtn.spinnerIsHide} >
                    <span className="spinner-border" role="status"></span>
                </div>
                <div>
                    {stateBtn.status}
                </div>
            </button>
        </>
    )
}
export default memo(SubmitBtn)