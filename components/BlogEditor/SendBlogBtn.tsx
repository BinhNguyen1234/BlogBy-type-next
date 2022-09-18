import { ReactElement } from "react"
import { useCallback } from "react"
import Style from "../../styles/components/BlogEditor/SendBlogBtn.module.sass"
import axios from "axios"
export default function SendBlogBtn():ReactElement{
    const sendNewPost = useCallback(()=>{
        axios.post("writeblog/newpost")
        
    },[])
    return (<>
        <button id={Style.SendBlogBtn} onClick={sendNewPost} type="button" className="btn btn-primary">
            Send
        </button>
    </>)
}