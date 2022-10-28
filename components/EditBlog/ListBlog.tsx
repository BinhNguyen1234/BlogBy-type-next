import { ReactElement } from "react";
import BlogChild from "./BlogChild"
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
        <ul><hr></hr>
            {data?.map(({url,title,date},index):ReactElement=>{return(<>
                <BlogChild key={url} data={{title,date,url}}></BlogChild>
                <hr></hr>
            </>)})}
        </ul>   
    </>)
} 