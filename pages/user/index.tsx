import LoginContainer from "../../components/LoginContainer"
import style from "../../styles/components/user/UserContainer.module.sass"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import {useEffect} from "react"
import { RootStateType } from "../../feature"
import axios, { AxiosResponse } from "axios"
import {wrapper} from "../../feature"
interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
interface Props{
    result: any
}
// "https://jsonplaceholder.typicode.com/posts "
export const getServerSideProps = async()=>{
    let Props: object | undefined | void
    let data:any = await axios.get("https://jsonplaceholder.typicode.com/posts/1")

    .catch((err:any)=>{
       console.log(err)
    })
    console.log(data.data)
    const result = data.data
    return {
        
        props : {result}
    }
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
    const isAuth: boolean = useSelector((state:RootStateType)=>{return state.loginSliceReducers.isAuth})
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