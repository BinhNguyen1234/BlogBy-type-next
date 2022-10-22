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
    console.log(children.data.date)
    return (
        <>
            <div  style={style}  className={Style.PreviewBlogChild + ` ${className}`}>
                <div className={Style.img_container}>
                    <img src={`${children?.data.imgThumbnail}`}></img>
                </div>
                <div  className={Style.title}>{children?.data.title||"Title"}</div>
                <div className={Style.content}>{children?.data.contentString||"content"}</div>
                <div className={Style.date}>{children?.data.date.toString().slice(0,9).replace(/-/g,"/")||"01/01/1991"}</div>
            </div>
        </>
    )
}