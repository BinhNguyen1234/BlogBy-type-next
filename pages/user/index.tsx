import LoginContainer from "../../components/LoginContainer"

import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import {ReactElement, useEffect} from "react"
import { RootStateType } from "../../feature"


import UserMenu from "../../components/UserMenu"
import MiddleContentLayout from "../../layout/MiddleContentLayout"



function User ():ReactElement{
    const isAuth = useSelector((state:RootStateType)=>{return state.loginSliceReducers.isAuth})
    const router = useRouter()
    useEffect(()=>{
        if(isAuth == false){
            router.push("/")
        }
    },[])
    return (<>
        <MiddleContentLayout>
            <UserMenu></UserMenu>
        </MiddleContentLayout>
    </>) 
}



export default User