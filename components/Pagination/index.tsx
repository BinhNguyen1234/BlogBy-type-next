import { ReactElement, useCallback, useState } from "react"
import Style from "../../styles/components/Pagination/Pagination.module.sass"
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
            <li onClick={()=>{changePage(page+=1)}} className="page-item page-link">{page+1}</li>
            <li onClick={()=>{changePage(page+=1)}} className="page-item page-link">Next</li>
        </ul>
    </nav>
    </>
}