import { ReactElement, useCallback, useState } from "react"
import Style from "../../styles/components/Pagination/Pagination.module.sass"
import Link from "next/link"
import {SEND} from "../../feature/handleProgressBar"
import { useDispatch } from "react-redux"

interface Props {
    page: number,
    hrefToQuerry: string
}

export default function Pagination({page,hrefToQuerry}:Props):ReactElement{
    const dispatch = useDispatch()
    return  <>
    <nav id={Style.Pagination} aria-label="Page navigation example">
        <ul className="pagination">
            <li>
                <Link prefetch={false}   href={`${hrefToQuerry}${page-1}`}>
                    <a onClick={()=>{dispatch(SEND(null))}} className={`page-item page-link ${page ===1?"disabled": null}`}>
                        Previous
                    </a>
                </Link>
            </li>
            { 
            page ===1 ? 
            null: 
            <li>
                <Link prefetch={false} href={`${hrefToQuerry}${page-1}`}>
                    <a onClick={()=>{dispatch(SEND(null))}} className="page-item page-link">
                        {page-1}
                    </a>
                </Link>
            </li>
            }
            <li style={{"cursor":"not-allowed"}} className="page-item active page-link">
                {page}
            </li>
            <li  >
                <Link prefetch={false}   href={`${hrefToQuerry}${page+1}`}>
                    <a onClick={()=>{dispatch(SEND(null))}} className="page-item page-link">
                        {page+1}
                    </a>
                </Link>
            </li>
            <li  >
                <Link prefetch={false}   href={`${hrefToQuerry}${page+1}`}>
                    <a onClick={()=>{dispatch(SEND(null))}} className="page-item page-link">
                        Next
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
    </>
}