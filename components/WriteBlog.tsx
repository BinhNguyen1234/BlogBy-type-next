import { ReactElement } from "react";
import Link from "next/link"
import { useSelector } from "react-redux";
export default function WriteBlog():ReactElement{
    return (<>
        <Link href="/user/writeblog">Write Blog</Link>
        </>)
   
}