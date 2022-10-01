import {ReactElement, useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import Style from "../../styles/components/BlogEditor/LoadingProcess.module.sass"
import {RootStateType} from "../../feature"
import {handleUiProgress} from "../../feature/handleProgressBar"
export default function LoadingProcess():ReactElement{
    const state = useSelector((state:RootStateType)=>{return state.handleProgressBar})
    const dispatch = useDispatch()
    return (<>
        <div onClick={(e)=>{
            dispatch(handleUiProgress({type: "50%"}))
            console.log(state)
            }}>test </div>
        <div onClick={(e)=>{
            dispatch(handleUiProgress({type: "100%"}))
            console.log(state)
            }} style={{"display": state.display}} id={Style.Container}>
            <div id={Style.ProcessBar}  className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{"width": `${state.valueNow}%`}}></div>
            </div>
        </div>
        </>)
}