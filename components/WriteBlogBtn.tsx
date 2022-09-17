import { ReactElement } from "react";
import Link from "next/link"

export default function WriteBlogBtn():ReactElement{
    return (<>
        <Link href="/user/writeblog">Write Blog</Link>
        </>)
   
}