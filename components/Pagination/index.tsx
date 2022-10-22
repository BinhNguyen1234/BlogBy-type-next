import { ReactElement, useCallback, useState } from "react"
import Style from "../../styles/components/Pagination/Pagination.module.sass"
import Link from "next/link"
interface Props {
    page: number
    changePage: any
}

export default function Pagination({page, changePage}:Props):ReactElement{
    return  <>
    <nav id={Style.Pagination} aria-label="Page navigation example">
        <ul className="pagination">
            <li onClick={()=>{changePage(page-=1)}} className={`page-item page-link ${page ===1?"disabled": null}`}>Previous</li>
            { page ===1 ? null: <li onClick={()=>{changePage(page-=1)}} className="page-item page-link">{page-1}</li>}
            <li className="page-item active page-link">{page}</li>
            <li onClick={()=>{changePage(page+=1)}} className="page-item page-link"><Link href={`/blog?page=${page+1}`}>{page+1}</Link></li>
            <li onClick={()=>{changePage(page+=1)}} className="page-item page-link"><Link href={`/blog?page=${page+1}`}>Next</Link></li>
        </ul>
    </nav>
    </>
}