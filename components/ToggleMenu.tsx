import React from "react"
import Link from "next/link"
import style from "../styles/components/ToggleMenu.module.sass"



const MenuToggle:React.FC = ()=>{
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
                <div>Login</div>
            </li>
        </ul>
        </>
    )
    }


export default MenuToggle