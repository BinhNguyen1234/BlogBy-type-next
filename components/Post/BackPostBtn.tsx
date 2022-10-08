import { ReactElement } from "react";
import Style from "../../styles/components/post/BackPostBtn.module.sass"
import Link from "next/link"
interface Props {
    children: string
}

export default function BackPostBtn({children}:Props): ReactElement {
    return (
        <>
        <Link href="/blog">
            <div id={Style.BackPostBtn}>
                <span>&larr;</span>
                <div>{children}</div>
            </div>
        </Link>
        </>
    )
}