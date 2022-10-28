import { ReactElement } from "react";
import Link from "next/link"
interface Props{
    data: Array<string>
}
export default function ListBlog({data}:Props):ReactElement{
    return (<>
        {data.map((blog):ReactElement=>{return(<>
        <Link href={"/user/editpost?post=blog-url"}>
            <div>
                {blog}
            </div>
        </Link>
        </>)})}
    </>)
} 