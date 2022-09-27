import style from "../styles/components/Login/LoginModal.module.sass"
import { ReactElement} from "react"
interface Props{
    children: JSX.Element | Array<JSX.Element>
    refProp: React.RefObject<HTMLDivElement>
}

function LoginModal({children, refProp}:Props): ReactElement{
    return (
        <>
            <div onClick={(e)=>{(e.currentTarget.style.display ="none")}} ref={refProp} id={style.LoginModal}>
                {children}
            </div>
        </>
    )
}



export default LoginModal