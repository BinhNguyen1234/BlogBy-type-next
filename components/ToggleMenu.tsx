import React from "react"
import style from "../styles/components/ToggleMenu.module.sass"



const MenuToggle:React.FC = ()=>{
    return (
        <>
        <ul  id={style.MenuToggle}>
            
            <li>Blog</li>
            <li>About Me</li>
            <li>User</li>
        </ul>
        </>
    )
    }


export default MenuToggle