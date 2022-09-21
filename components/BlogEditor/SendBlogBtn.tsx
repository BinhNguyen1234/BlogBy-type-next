import { ReactElement } from "react"
import { useCallback } from "react"
import Style from "../../styles/components/BlogEditor/SendBlogBtn.module.sass"
import axios from "axios"
import { useSelector } from "react-redux"
import {RootStateType} from "../../feature"
export default function SendBlogBtn():ReactElement{
    const sendNewPost = useCallback(()=>{
        axios.post("writeblog/newpost")
        
    },[])
    const stateBtn = useSelector((state:RootStateType)=>{return state.UISendPostBtn})
    return (<>
        <button id={Style.SendBlogBtn} onClick={sendNewPost} type="button" className="btn btn-primary">
            {stateBtn.content}
        </button>
    </>)
}