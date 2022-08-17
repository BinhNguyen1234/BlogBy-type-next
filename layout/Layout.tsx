import NavBar from "./NavBar"
import Footer from "./Footer"

interface Props{
    children : JSX.Element
};

const Layout:React.FC<Props>  = ({children}:Props) =>{
    return (
        <>
        <NavBar></NavBar>
            {children}
        <Footer></Footer>
        </>
    )
}
export default Layout;