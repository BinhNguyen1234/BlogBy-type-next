import { ReactElement } from "react";
import axios from "axios"
import { useCallback } from "react";
import { useDispatch} from "react-redux";
import {LOGOUT} from "../../feature/login"
import router from "next/router"
export default function LogOutBtn():ReactElement{
    const dispatch = useDispatch()
    const logOutHandle = useCallback(()=>{
        axios.post("/user/logout",{
            method: "POST"
        })
        .then((response)=>{
            if(response.status === 202){
                dispatch(LOGOUT(null))
                router.push("/")
            }
        })
    },[])
    return (<>
        <div onClick={logOutHandle}>
            Log Out
        </div>
    </>)
}