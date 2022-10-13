import { ReactElement, useCallback, useState } from "react"
import Style from "../../styles/components/Pagination/Pagination.module.sass"
interface Props {
    children: number
    changePage: any
}

export default function Pagination({children, changePage}:Props):ReactElement{
   
    
    return  <>
    <nav id={Style.Pagination} aria-label="Page navigation example">
        <ul className="pagination">
            <li onClick={()=>{changePage(children-=1)}} className={`page-item page-link ${children ===1?"disabled": null}`}>Previous</li>
            { children ===1 ? null: <li onClick={()=>{changePage(children-=1)}} className="page-item page-link">{children-1}</li>}
            <li className="page-item active page-link">{children}</li>
            <li onClick={()=>{changePage(children+=1)}} className="page-item page-link">{children +1}</li>
            <li onClick={()=>{changePage(children+=1)}} className="page-item page-link">Next</li>
        </ul>
    </nav>
    </>
}