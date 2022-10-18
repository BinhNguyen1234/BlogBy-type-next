import { ReactElement, useState } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogContainer.module.sass"
import PreviewBlogChild from "./PreviewBlogChild"
import Pagination from "../Pagination"
interface Props {
    children: {
        data: Array<Object> | string[] |null,
        
    },
    className?: string
}
 export default function PreviewBlogContainer({children, className}:Props):ReactElement{
   const defaultData =  {
            previewImgUrl : "test",
            previewTitle: "titletest1",
            previewContent: "content test1",
            previewDate: "10/2/1005"
        }
    let [current, setCurrent] = useState(1)
    return (<>
        <div id={Style.PreviewBlogContainer} >{
           children.data?
           children.data?.map((data:any)=>{return <>
                <PreviewBlogChild className={className}>{data}</PreviewBlogChild>
            </>}):
            <PreviewBlogChild className={className}>{defaultData}</PreviewBlogChild>
        }</div>
        <Pagination changePage={setCurrent}>{current}</Pagination>
    </>)
 }