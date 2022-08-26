import {sha256} from "js-sha256"
import axios from 'axios';
import style from "../styles/components/login/LoginForm.module.sass"
import Image from "next/image"
import thienImg from "../public/image/thien.png"
import shadow from "../public/image/shadow.png"
import LoginCloseModalBtn from "./LoginCloseModalBtn"
import React, {useCallback} from "react"
import {useDispatch, useSelector} from "react-redux"
import {LOGIN,LOGOUT} from "../feature/login"
interface Props{
    hideModal: Function
}
interface UserInfoType {
    username: any,
    password: any
}
const LoginForm: React.FC<Props> = ({hideModal}:Props)=>{
    const dispatchAuth = useDispatch()
    const state = useSelector(state=> state)

    const sendRequesLogin = useCallback((e:React.MouseEvent)=>{
        e.preventDefault()
        const form = document.getElementById("loginfeature")
        const formData = new FormData(form as HTMLFormElement|undefined)
        const UserInfo: UserInfoType = {
            username : formData.get("username"),
            password : sha256(formData.get("password") as string)
        }
        axios.post("/login/auth",UserInfo,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
             auth : UserInfo
            })
            
            .then( (response)=>{
                if(response.status===201){
                    dispatchAuth(LOGIN(null))
                    hideModal("none")
                    console.log(state)
                }
            })
            .catch((err=>{
                console.log(err)               
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
            <div id={style.LoginForm}>
                <div>Hello Buddy</div>
                <form action="/login/auth" id="loginfeature" method="post">
                    <label>Username</label>
                    <input form="loginfeature" name="username" placeholder="Enter Username"></input>
                    <label>Password</label>
                    <input form="loginfeature" name="password" placeholder="Enter password" type="password"></input>
                    <button className="btn btn-primary" onClick={sendRequesLogin} type="submit">Login</button>
                </form>
            </div>
        </div>
        </>
    )
}


export default LoginForm