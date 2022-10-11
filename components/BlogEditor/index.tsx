import { ReactElement, useRef, useCallback, useContext, createContext, useState } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"
import SendBlogBtn from "./SendBlogBtn"
import PostThumbnailSelect from "./PostThumbnailSelect"
import Style from "../../styles/components/BlogEditor/BlogEditor.module.sass"
import axios from "axios"
import ReactQuill from "react-quill"
import PreviewBlogContainer from "../PreviewBlog/PreviewBlogContainer"
import { useDispatch, useSelector } from "react-redux"
import {handleSendPostBtn} from "../../feature/login/UISendPostBtn"
import { RootStateType } from "../../feature"
import PreviewBlogChild from "../PreviewBlog/PreviewBlogChild"
import { AppInitialProps } from "next/app"
interface intialStateProps {
    previewTitle: string | null,
    previewContent: string | null,
    previewDate:string | null, 
    previewUrlImg: string | null
}
const initialState ={
    previewTitle: null,
    previewContent:  null,
    previewDate:null, 
    previewUrlImg:  null
}
export const PreviewContext = createContext(initialState)
export default function BlogEditor ():ReactElement{
    
    const titleEditorRef = useRef<HTMLTextAreaElement>(null)
    const contentEditorRef = useRef<ReactQuill>(null)
    const dispatch = useDispatch()
    const statusBtn = useSelector((state:RootStateType)=>{return state.UISendPostBtn.content})
    const sendNewPost = useCallback( ()=>{
            dispatch(handleSendPostBtn({type: "WAITTING"}))
            const editor = contentEditorRef.current?.getEditor()
            
            axios({
                method: 'post',
                url:"writeblog/newpost",
                
                data: {
                    title: titleEditorRef.current?.value,
                    content: editor?.getContents().ops,
                    contentString: editor?.getText()
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
   const [title, setTitle] = useState(null)
    
    return (<>
       
        <form id={Style.Editor}>
            <TitleEditor onChange={setTitle} ref={titleEditorRef} form={Style.Editor.toString()}></TitleEditor>
            <ContentEditor  ref={contentEditorRef}></ContentEditor>
            <PostThumbnailSelect></PostThumbnailSelect>
            <PreviewBlogContainer>
                <PreviewContext.Provider value={{previewTitle: title, previewContent: null,previewDate:null, previewUrlImg: null}}>
                    <PreviewBlogChild   style={{"justifySelf": "flex-start", "margin": "2rem 0 0 0"}}>
                        {{previewTitle: title}}
                    </PreviewBlogChild>
                    
                </PreviewContext.Provider>
                <PreviewBlogChild   style={{"justifySelf": "flex-start", "margin": "2rem 0 0 0"}}>

                    </PreviewBlogChild>
            </PreviewBlogContainer>
            <SendBlogBtn onClick={()=>{
                if(statusBtn!="TRY AGAIN"){sendNewPost()}
                else{
                    dispatch(handleSendPostBtn({type: "INITIAL"})) 
                }
                }}></SendBlogBtn>
        </form>
    </>)
}
