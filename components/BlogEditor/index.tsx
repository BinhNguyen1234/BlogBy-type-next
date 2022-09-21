import { ReactElement, useRef } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"
import SendBlogBtn from "./SendBlogBtn"
import Style from "../../styles/components/BlogEditor/BlogEditor.module.sass"

export default function BlogEditor ():ReactElement{
    const titleEditorRef = useRef<HTMLTextAreaElement>(null)
    const contentEditorRef = useRef(null)
    return (<>
        <form id={Style.Editor}>
            <TitleEditor ref={titleEditorRef} form={Style.Editor.toString()}></TitleEditor>
            <ContentEditor ref={contentEditorRef}></ContentEditor>
            <SendBlogBtn refData={{title: titleEditorRef.current,content:contentEditorRef.current}}></SendBlogBtn>
        </form>
    </>)
}