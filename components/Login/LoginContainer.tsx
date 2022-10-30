import {sha256} from "js-sha256"
import axios from 'axios';
import style from "../../styles/components/Login/LoginForm.module.sass"
import Image from "next/image"
import thienImg from "../../public/image/thien.png"
import shadow from "../../public/image/shadow.png"
import LoginCloseModalBtn from "./LoginCloseModalBtn"
import React, {useCallback, memo} from "react"
import {useDispatch, useSelector} from "react-redux"
import {LOGIN} from "../../feature/login"
import {handleUI} from "../../feature/login/UISubmitBtn"
import SubmitBtn from "../../components/Login/SubmitBtn"
import {RootStateType} from "../../feature"
interface Props{
    hideModal: Function
}
interface UserInfoType {
    username: any,
    password: any
}
const LoginForm: React.FC<Props> = ({hideModal}:Props)=>{
    const dispatch = useDispatch()
    const message = useSelector((state:RootStateType)=>{return state.UISubmitBtn.message})

    const sendRequesLogin = useCallback((e:React.MouseEvent)=>{
        dispatch(handleUI({type:"SEND"}))
        e.preventDefault()
        const form = document.getElementById("loginfeature")
        const formData = new FormData(form as HTMLFormElement|undefined)
        const UserInfo: UserInfoType = {
            username : formData.get("username"),
            password : sha256(formData.get("password") as string)
        }
        axios.post("/api/v1/login/auth",UserInfo,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
             auth : UserInfo
            })
            
            .then( (response)=>{
                if(response.status===201){
                    dispatch(LOGIN(UserInfo.username))
                    dispatch(handleUI({type: "SUCCESS"}))
                    hideModal("none")
                }
            })
            .catch((err=>{
                console.log(err)  
                dispatch(handleUI({type: "FAILED", message: `${err.response.status}: ${err.response.data}`}))             
            }))
    },[]) 
    return (
        <>
        <div onClick={(e)=>{e.stopPropagation()}} id={style.LoginForm_Container}>
            <LoginCloseModalBtn hideModal={hideModal} ></LoginCloseModalBtn>
            <div id={style.LoginForm_Animated}>
                <div id={style.LoginForm_Img}>
                    <Image layout="fill" src={thienImg} ></Image>
                </div>
                <div id={style.LoginFrom_shadow}>
                    <Image src={shadow}></Image>
                </div>
            </div>
            <div  id={style.LoginForm}>
                <div>Hello Buddy</div>
                <form action="/login/auth" id="loginfeature" method="post">
                    <label>Username</label>
                    <input form="loginfeature" name="username" placeholder="Enter Username"></input>
                    <label>Password</label>
                    <input form="loginfeature" name="password" placeholder="Enter password" type="password"></input>
                    <p id={style.message}>{message}</p>
                    <SubmitBtn onClick={sendRequesLogin}></SubmitBtn>
                    
                </form>
               
            </div>
        </div>
        </>
    )
}


export default memo(LoginForm)