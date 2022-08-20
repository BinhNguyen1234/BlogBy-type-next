import NavBar from "./NavBar"
import Footer from "./Footer"
import LoginContainer from "../components/LoginContainer"
import LoginModal from "../components/LoginModal"
interface Props{
    children : Array<JSX.Element>
};

const Layout:React.FC<Props>  = ({children}:Props) =>{
    return (
        <>
        <LoginModal>
            <LoginContainer></LoginContainer>
        </LoginModal>
        <NavBar></NavBar>
            {children}
        <Footer></Footer>
        </>
    )
}
export default Layout;