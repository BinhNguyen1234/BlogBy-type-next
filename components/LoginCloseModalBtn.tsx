import style from "../styles/components/Login/LoginCloseModalBtn.module.sass"
interface Props {
    hideModal: Function
}
const LoginCloseModalBtn:React.FC<Props>=({hideModal})=>{
    return(
        <>
            <div onClick={(e)=>{
                
                hideModal("none")}} id={style.LoginCloseModalBtn}>
                
            </div>
        </>
    )
}

export default LoginCloseModalBtn