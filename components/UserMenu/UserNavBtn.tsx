import { ReactElement } from "react";
import Link from "next/link"
interface Props {
    href: string,
    children: string
}
export default function UserNavBtn({href,children}:Props):ReactElement{
    return (<>
            <Link href={href}>{children}</Link>
        </>)
   
}