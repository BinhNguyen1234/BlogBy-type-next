import { ReactElement, useState } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogContainer.module.sass"
import PreviewBlogChild from "./PreviewBlogChild"
import Pagination from "../Pagination"
interface Props {
    children: {
        data: Array<Object> | string[] 
    }
}
 export default function PreviewBlogContainer({children}:Props):ReactElement{
    let [current, setCurrent] = useState(1)
    return (<>
        <div id={Style.PreviewBlogContainer} >{
            children.data.map((data)=>{return <>
                <PreviewBlogChild>{data}</PreviewBlogChild>
            </>})
        }</div>
        <Pagination changePage={setCurrent}>{current}</Pagination>
    </>)
 }