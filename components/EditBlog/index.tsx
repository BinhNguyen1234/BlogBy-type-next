import { ReactElement } from "react";
import ListBlog from "./ListBlog";
import {DataType} from "./ListBlog"
interface Props {
    data: Array<DataType>
}
export default function EditBlog({data}:Props):ReactElement{
    return (<>
        <ListBlog data={data}></ListBlog>
    </>)
}