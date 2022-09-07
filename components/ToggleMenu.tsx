import React from "react"
import Link from "next/link"
import style from "../styles/components/ToggleMenu.module.sass"
import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {RootStateType} from "../feature"
import { LOGIN } from "../feature/login"
import {memo} from 'react'
import axios from "axios"
interface Props {
    showModal: Function
    children?: string
}

const MenuToggle:React.FC<Props> = ({showModal, children})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get("login").then((response=>{
            if(response.data ==="LOGED-IN"){
                dispatch(LOGIN(null))
            }
        }))
    },[])
    const loginSlice = useSelector((state : RootStateType) =>{return state.loginSliceReducers})

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
                {loginSlice.isAuth? <Link href="/user">{loginSlice.infoUser}</Link>:
                         <div onClick={()=>{showModal("flex")}}>Login</div>}
            </li>
        </ul>
        </>
    )
    }


export default memo(MenuToggle)