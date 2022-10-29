import { ReactElement } from "react";
import BlogChild from "./BlogChild"
import Style from "../../styles/components/EditBlog/ListBlog.module.sass"
export interface DataType{
    url: string,
    title: string,
    date: string
}
interface Props{
    data?: Array<DataType>
}
export default function ListBlog({data}:Props):ReactElement{
    return (<>
        <ul id={Style.ListBlog}>
            {data?.map(({url,title,date},index):ReactElement=>{return(<>
                <BlogChild key={url} data={{title,date,url}}></BlogChild>
                <hr></hr>
            </>)})}
        </ul>   
    </>)
} 