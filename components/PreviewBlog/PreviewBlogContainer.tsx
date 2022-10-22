import { ReactElement, useState } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogContainer.module.sass"
import Link from "next/link"
import PreviewBlogChild from "./PreviewBlogChild"
interface Props {
    children?: Array<Object> | string[] |null,
    className?: string
}
 export default function PreviewBlogContainer({children, className}:Props):ReactElement{
    return (<>
        {children?.map((data:any)=>{console.log(data.url)})}
        <div id={Style.PreviewBlogContainer} >{
        
           children?
           children.map(
            (data:any)=>{return <>
                <Link href={`/${data.url}`}><PreviewBlogChild className={className}>{{data}}</PreviewBlogChild></Link>
            </>}
            ):
            <PreviewBlogChild className={className}>{}</PreviewBlogChild>
        }</div>
        
    </>)
 }