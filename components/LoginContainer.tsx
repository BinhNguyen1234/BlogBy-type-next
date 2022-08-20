import style from "../styles/components/login/LoginForm.module.sass"
import Image from "next/image"
import thienImg from "../public/image/thien.png"
import shadow from "../public/image/shadow.png"
const LoginForm: React.FC = ()=>{
    return (
        <>
        <div id={style.LoginForm_Container}>
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
                <form >
                    <label>Username</label>
                    <input placeholder="Enter Username"></input>
                    <label>Password</label>
                    <input placeholder="Enter password" type="password"></input>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
        </>
    )
}


export default LoginForm