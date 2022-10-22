import { ReactElement, useRef, useCallback, useState } from "react"
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
    imgThumbnail:  null
}

export default function BlogEditor ():ReactElement{
    const [title, setTitle] = useState(null)
    const [contentString, setContentString] = useState()
    const [imgThumbnail,setUrl] = useState(null)
    const refState = useRef({contentString,imgThumbnail})
    refState.current = {contentString,imgThumbnail}
    const handleUiSendBtn = useCallback(()=>{
        if(statusBtn!="TRY AGAIN"){sendNewPost()}
        else{
            dispatch(handleSendPostBtn({type: "INITIAL"})) 
        }
        },[])
    const titleEditorRef = useRef<HTMLTextAreaElement>(null)
    const contentEditorRef = useRef<ReactQuill>(null)
    const dispatch = useDispatch()
    const statusBtn = useSelector((state:RootStateType)=>{return state?.UISendPostBtn.content})
    const sendNewPost = useCallback(() => {
            dispatch(handleSendPostBtn({type: "WAITTING"}))
            const editor = contentEditorRef.current?.getEditor()
            console.log;
            axios({
                method: 'post',
                url:"writeblog/newpost",
                
                data: {
                    title: titleEditorRef.current?.value,
                    content: editor?.getContents().ops,
                    contentString: refState.current.contentString,
                    imgThumbnail: refState.current.imgThumbnail
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
        
    },[])
    return (<>
        <form id={Style.Editor}>
            <TitleEditor onChange={setTitle} ref={titleEditorRef} form={Style.Editor.toString()}></TitleEditor>
            <ContentEditor setDefaultPreviewUrl={setUrl} onChange={setContentString} ref={contentEditorRef}></ContentEditor>
            <PostThumbnailSelect onChange={setUrl}></PostThumbnailSelect>
                <PreviewBlogChild  style={{"justifySelf": "flex-start", "margin": "2rem 0 0 0"}}>
                    {{data:{title, contentString,imgThumbnail, date: new Date().toLocaleDateString(['ban', 'id'])}}}
                </PreviewBlogChild>
            <SendBlogBtn onClick={handleUiSendBtn}></SendBlogBtn>
        </form>
    </>)
}
        
            
       
                
