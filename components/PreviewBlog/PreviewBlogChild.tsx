import { CSSProperties, HTMLAttributes, ReactElement, useContext } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogChild.module.sass"
import {PreviewContext} from "../BlogEditor/index"
interface Props{
    alt? : string,
    children? : {
        previewImgUrl?: string,
        previewTitle?: string,
        previewContent?: string,
        previewDate?: string
    } | any,
    style?: CSSProperties
  }
export default function PreviewBlogChild({children, style}:Props):ReactElement{
    
    return (
        <>
            <div style={style}  className={Style.PreviewBlogChild}>
                <div className={Style.img_container}>
                    <img src={`${children?.previewImgUrl}`}></img>
                </div>
                <div  className={Style.title}>{children?.previewTitle||"Title"}</div>
                <div className={Style.content}>{children?.previewContent||"content"}</div>
                <div className={Style.date}>{children?.previewDate||"01/01/1991"}</div>
            </div>
        </>
    )
}