import { ReactElement, useRef, useCallback } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"
import SendBlogBtn from "./SendBlogBtn"
import Style from "../../styles/components/BlogEditor/BlogEditor.module.sass"
import axios from "axios"
import ReactQuill from "react-quill"

export default function BlogEditor ():ReactElement{
    const titleEditorRef = useRef<HTMLTextAreaElement>(null)
    const contentEditorRef = useRef<ReactQuill>(null)

    const sendNewPost = useCallback( ()=>{
        const editor = contentEditorRef.current?.getEditor()
        axios({
            method: 'post',
            url:"writeblog/newpost",
            
            data: {
                title: titleEditorRef.current?.value,
                content: editor?.getContents().ops
            }
        })
        .then((res)=>{
            console.log("res status ",res.status, "Component/BlogEditor/index.tsx")
        })
        
    },[])
    
    return (<>
        <form id={Style.Editor}>
            <TitleEditor ref={titleEditorRef} form={Style.Editor.toString()}></TitleEditor>
            <ContentEditor ref={contentEditorRef}></ContentEditor>
            <SendBlogBtn onClick={sendNewPost}></SendBlogBtn>
        </form>
    </>)
}
