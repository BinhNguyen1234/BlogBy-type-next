import { ReactElement } from "react";
import { InforType } from "./BlogChild";
import Link from "next/link";

export default function InforBlog({data}:InforType):ReactElement{
    return (<>
        <div>
            <Link href={data.url}>
                <a>
                    <div>{data.title}</div>
                </a>
            </Link>
            <div>{data.date}</div>
        </div>
    </>)
}