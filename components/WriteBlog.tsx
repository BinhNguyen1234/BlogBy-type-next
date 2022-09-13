import { ReactElement } from "react";
import Link from "next/link"
import { useSelector } from "react-redux";
import { RootStateType } from "../feature";
export default function WriteBlog():ReactElement{
    const isAuth = useSelector((state:RootStateType)=>{return state.loginSliceReducers.isAuth})
    
   
        return (<>
        <Link href="/user/writeblog">Write Blog</Link>
        </>)
   
}