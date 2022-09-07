import LoginContainer from "../../components/LoginContainer"

import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import {useEffect} from "react"
import { RootStateType } from "../../feature"
import axios, { AxiosResponse } from "axios"
import {wrapper} from "../../feature"
import { GetServerSideProps } from "next"

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


function MenuUser ({result}:Props){
    // useEffect(()=>{
    //     console.log(1)
    //     let getData = axios.get("https://jsonplaceholder.typicode.com/posts/1")
               
    //         .catch((err)=>{
             
    //         })
    //     let result = getData.then((res)=>{return res})
            
            
           
    //    let test = (async function (){
    //     let data:any = await result;
    //     console.log(data.data)
    //    })()
        
    
    // },undefined)
    const state = useSelector((state)=>{return state})
    console.log("render on user", state)
    const isAuth = useSelector((state:RootStateType)=>{return state.loginSliceReducers.isAuth})
    const router = useRouter()
    useEffect(()=>{
        
        if(isAuth==false){
            router.push("/aboutme")
        }
    },[])
        return (<>
            {console.log(result)}
            <div>{result.title}</div>
        
    </>) 
        




}



export default MenuUser