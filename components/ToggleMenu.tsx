import React from "react"
import Link from "next/link"
import style from "../styles/components/ToggleMenu.module.sass"
import {useCallback} from "react"

interface Props {
    showModal: Function
}

const MenuToggle:React.FC<Props> = ({showModal})=>{
    
    return (
        <>
        <ul  id={style.MenuToggle}>
            
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/aboutme">About Me</Link>
            </li>
            <li>
                <div onClick={()=>{showModal("flex")}}>Login</div>
            </li>
        </ul>
        </>
    )
    }


export default MenuToggle