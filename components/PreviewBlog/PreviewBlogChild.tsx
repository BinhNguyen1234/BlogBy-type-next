import { CSSProperties, ReactElement } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogChild.module.sass"

interface Props{
    alt? : string,
    children? : {
        imgThumbnail?: string,
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
                    <img onError={({currentTarget})=>{
                        currentTarget.onerror = null;
                        currentTarget.src ="/external/404-not-found-error.jpeg"
                    }} src={`${children?.data.imgThumbnail||"/external/404-not-found-error.jpeg"}`}></img>
                </div>
                <div  className={Style.title}>{children?.data.title||"Title"}</div>
                <div className={Style.content}>{children?.data.contentString||"content"}</div>
                <div className={Style.date}>{`${children?.data.date || "01/01/1991"}`}</div>
            </div>
            
        </>
    )
}