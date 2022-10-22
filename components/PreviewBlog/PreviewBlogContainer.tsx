import { ReactElement, useState } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogContainer.module.sass"
import PreviewBlogChild from "./PreviewBlogChild"
import Pagination from "../Pagination"
interface Props {
    children?: Array<Object> | string[] |null,
    className?: string
}
 export default function PreviewBlogContainer({children, className}:Props):ReactElement{
    
    return (<>
        <div id={Style.PreviewBlogContainer} >{
           children?
           children.map(
            (data:any)=>{return <>
                <PreviewBlogChild className={className}>{{data}}</PreviewBlogChild>
            </>}
            ):
            <PreviewBlogChild className={className}>{}</PreviewBlogChild>
        }</div>
        
    </>)
 }