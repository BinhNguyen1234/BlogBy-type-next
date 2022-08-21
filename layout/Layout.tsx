import NavBar from "./NavBar"
import Footer from "./Footer"
import LoginContainer from "../components/LoginContainer"
import LoginModal from "../components/LoginModal"

import React, {MutableRefObject, useRef, useCallback} from "react"
interface Props{
    children : Array<JSX.Element>
};

const Layout:React.FC<Props>  = ({children}:Props) =>{
    const loginModalRef = React.useRef<HTMLDivElement | null>(null)
    const handleModal = useCallback((action:string):void=>{
        loginModalRef.current?.setAttribute("style",`display: ${action}`);
    },[])
    return (
        <>
        <LoginModal refProp={loginModalRef}>
            <LoginContainer hideModal={handleModal}></LoginContainer>
        </LoginModal>
        <NavBar showModal = {handleModal}></NavBar>
            {children}
        <Footer></Footer>
        </>
    )
}
export default Layout;