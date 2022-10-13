import { ReactElement, useRef, useCallback, createContext, useState } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"
import SendBlogBtn from "./SendBlogBtn"
import PostThumbnailSelect from "./PostThumbnailSelect"
import Style from "../../styles/components/BlogEditor/BlogEditor.module.sass"
import axios from "axios"
import ReactQuill from "react-quill"
import { useDispatch, useSelector } from "react-redux"
import {handleSendPostBtn} from "../../feature/login/UISendPostBtn"
import { RootStateType } from "../../feature"
import PreviewBlogChild from "../PreviewBlog/PreviewBlogChild"


const initialState ={
    title: null,
    contentString:  null,
    date:null, 
    url:  null
}
export const PreviewContext = createContext(initialState)
export default function BlogEditor ():ReactElement{
    const [title, setTitle] = useState(null)
    const [contentString, setContentString] = useState(null)
    const [url,setUrl] = useState(null)
    const handleUiSendBtn = useCallback(()=>{
        if(statusBtn!="TRY AGAIN"){sendNewPost()}
        else{
            dispatch(handleSendPostBtn({type: "INITIAL"})) 
        }
        },[])
    const titleEditorRef = useRef<HTMLTextAreaElement>(null)
    const contentEditorRef = useRef<ReactQuill>(null)
    const dispatch = useDispatch()
    const statusBtn = useSelector((state:RootStateType)=>{return state.UISendPostBtn.content})
    const sendNewPost = ()=>{
            dispatch(handleSendPostBtn({type: "WAITTING"}))
            const editor = contentEditorRef.current?.getEditor()
            
            axios({
                method: 'post',
                url:"writeblog/newpost",
                
                data: {
                    title: titleEditorRef.current?.value,
                    content: editor?.getContents().ops,
                    contentString: contentString,
                    imgThumbnail: url
                }
            })
            .then(()=>{
                dispatch(handleSendPostBtn({type: "SUCCESS"}))
                editor?.enable(false)
                editor?.blur()
            })
            .catch((err)=>{
                dispatch(handleSendPostBtn({type: "FAILED", message: `${err.response.status}: ${err.response.data}`}))
            })
        
    }
    return (<>
        <form id={Style.Editor}>
            <TitleEditor onChange={setTitle} ref={titleEditorRef} form={Style.Editor.toString()}></TitleEditor>
            <ContentEditor setDefaultPreviewUrl={setUrl} onChange={setContentString} ref={contentEditorRef}></ContentEditor>
            <PostThumbnailSelect onChange={setUrl}></PostThumbnailSelect>
                <PreviewBlogChild  style={{"justifySelf": "flex-start", "margin": "2rem 0 0 0"}}>
                    {{title, contentString,url}}
                </PreviewBlogChild>
            <SendBlogBtn onClick={handleUiSendBtn}></SendBlogBtn>
        </form>
    </>)
}
        
            
       
                
