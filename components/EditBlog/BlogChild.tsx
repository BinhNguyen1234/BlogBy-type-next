import { ReactElement } from "react";
import InforBlog from "./InforBlog";
import ModifyBtn from "./ModifyBtn"
import Style from "../../styles/components/EditBlog/BlogChild.module.sass" 
export interface InforType {
    data : {
        title: string,
        date: string,
        url: string
    }
}

export default function BlogChild({data}:InforType):ReactElement{
    return(<>
        <li className={Style.BlogChild}>
            <InforBlog data={data}></InforBlog>
            <ModifyBtn></ModifyBtn>
        </li>
    </>)
}