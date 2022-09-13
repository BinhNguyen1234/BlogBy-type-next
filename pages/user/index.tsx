import LoginContainer from "../../components/LoginContainer"

import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import {ReactElement, useEffect} from "react"
import { RootStateType } from "../../feature"
import axios, { AxiosResponse } from "axios"
import {wrapper} from "../../feature"
import { GetServerSideProps } from "next"
import UserMenu from "../../components/UserMenu"
import MiddleContentLayout from "../../layout/MiddleContentLayout"
interface Req{
    req: any
}
interface Data {
    data: any
}
// "https://jsonplaceholder.typicode.com/posts "
export const getServerSideProps:GetServerSideProps= async({req}:Req)=>{
    
    console.log(req.user)
   
    let data:AxiosResponse|void = await axios.get("https://jsonplaceholder.typicode.com/posts/1")

    .catch((err)=>{
       console.log(err)
    })
    console.log(data?.data)
    const result = data?.data
    return {
        
        props : {result}
    }
}
interface Props {
    result: any
}


function User ({result}:Props):ReactElement{
    const isAuth = useSelector((state:RootStateType)=>{return state.loginSliceReducers.isAuth})
    const router = useRouter()
    useEffect(()=>{
        if(isAuth == false){
            router.push("/aboutme")
        }
    },[])
    return (<>
        <MiddleContentLayout>
            <UserMenu></UserMenu>
        </MiddleContentLayout>
    </>) 
}



export default User