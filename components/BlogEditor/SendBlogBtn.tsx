import { MouseEventHandler, ReactElement } from "react"
import { useCallback } from "react"
import Style from "../../styles/components/BlogEditor/SendBlogBtn.module.sass"
import axios from "axios"
import { useSelector } from "react-redux"
import {RootStateType} from "../../feature"
interface Props {
    onClick: MouseEventHandler
}
export default function SendBlogBtn({onClick}:Props):ReactElement{
   
    const stateBtn = useSelector((state:RootStateType)=>{return state.UISendPostBtn})
    return (<>
        <button id={Style.SendBlogBtn} onClick={onClick} type="button" className="btn btn-primary">
            {stateBtn.content}
        </button>
    </>)
}