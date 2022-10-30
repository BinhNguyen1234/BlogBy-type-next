import { ReactElement } from "react";
import { InforType } from "./BlogChild";
import Link from "next/link";
import Style from "../../styles/components/EditBlog/InforBlog.module.sass"
export default function InforBlog({data,isLoading}:InforType):ReactElement{
    return (<>
        <div  className={isLoading?"--skeleton":""}>
            <Link href={data.url}>
                <a style={{"textDecorationLine":"none"}}>
                    <div className={Style.InforBlogTitle}>{data.title}</div>
                </a>
            </Link>
            <div>{data.date}</div>
        </div>
    </>)
}