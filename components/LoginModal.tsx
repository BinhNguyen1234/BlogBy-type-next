import style from "../styles/components/Login/LoginModal.module.sass"

interface Props{
    children: JSX.Element
}

function LoginModal({children}:Props){
    return (
        <>
            <div id={style.LoginModal}>
                {children}
            </div>
        </>
    )
}



export default LoginModal