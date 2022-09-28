import { ReactElement, useRef, useCallback } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"
import SendBlogBtn from "./SendBlogBtn"

import Style from "../../styles/components/BlogEditor/BlogEditor.module.sass"
import axios from "axios"
import ReactQuill from "react-quill"
import { useDispatch, useSelector } from "react-redux"
import {handleSendPostBtn} from "../../feature/login/UISendPostBtn"
import { RootStateType } from "../../feature"
export default function BlogEditor ():ReactElement{
    const titleEditorRef = useRef<HTMLTextAreaElement>(null)
    const contentEditorRef = useRef<ReactQuill>(null)
    const dispatch = useDispatch()
    const statusBtn = useSelector((state:RootStateType)=>{return state.UISendPostBtn.content})
    const sendNewPost = useCallback( ()=>{
            dispatch(handleSendPostBtn({type: "WAITTING"}))
            const editor = contentEditorRef.current?.getEditor()
            editor?.enable(false)
            axios({
                method: 'post',
                url:"writeblog/newpost",
                
                data: {
                    title: titleEditorRef.current?.value,
                    content: editor?.getContents().ops
                }
            })
            .then(()=>{
                dispatch(handleSendPostBtn({type: "SUCCESS"}))
            })
            .catch((err)=>{
                dispatch(handleSendPostBtn({type: "FAILED", message: `${err.response.status}: ${err.response.data}`}))
            })
        
    },[])
    
    return (<>
        <form id={Style.Editor}>
            <TitleEditor ref={titleEditorRef} form={Style.Editor.toString()}></TitleEditor>
            <ContentEditor ref={contentEditorRef}></ContentEditor>
            <SendBlogBtn onClick={()=>{
                if(statusBtn!="TRY AGAIN"){sendNewPost()}
                else{
                    dispatch(handleSendPostBtn({type: "INITIAL"})) 
                }
                }}></SendBlogBtn>
        </form>
    </>)
}
