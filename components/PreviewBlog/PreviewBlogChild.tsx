import { CSSProperties, ReactElement } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogChild.module.sass"

interface Props{
    alt? : string,
    children? : {
        url?: string,
        title?: string,
        contentString?: string,
        date?: string
    } | any,
    style?: CSSProperties,
    className?: string
  }
export default function PreviewBlogChild({children, style, className}:Props):ReactElement{
    
    return (
        <>
            <div  style={style}  className={Style.PreviewBlogChild + ` ${className}`}>
                <div className={Style.img_container}>
                    <img src={`${children?.url}`}></img>
                </div>
                <div  className={Style.title}>{children?.title||"Title"}</div>
                <div className={Style.content}>{children?.contentString||"content"}</div>
                <div className={Style.date}>{children?.date||"01/01/1991"}</div>
            </div>
        </>
    )
}