import { ReactElement } from "react";
import ListBlog from "./ListBlog";
import {DataType} from "./ListBlog"
interface Props {
    data: Array<DataType>
    stage?: number
}
export default function EditBlog({data,stage}:Props):ReactElement{
    return (<>
        
        <ListBlog data={data}></ListBlog>

    </>)
}