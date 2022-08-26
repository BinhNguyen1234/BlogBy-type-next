import React from "react"
import Link from "next/link"
import style from "../styles/components/ToggleMenu.module.sass"
import {useSelector} from "react-redux"
import {LoginStateType} from "../feature/login"
import {RootStateType} from "../feature"
import {memo} from 'react'
interface Props {
    showModal: Function
}

const MenuToggle:React.FC<Props> = ({showModal})=>{
    const isAuth:boolean = useSelector((state : RootStateType) =>{return state.loginSliceReducers.isAuth})
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
                {isAuth? <Link href="/user">User</Link>:
                         <div onClick={()=>{showModal("flex")}}>Login</div>}
            </li>
        </ul>
        </>
    )
    }


export default memo(MenuToggle)