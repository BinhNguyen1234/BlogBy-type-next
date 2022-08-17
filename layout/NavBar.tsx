import style from "../styles/Layouts/NavBar.module.sass"
import ToggleBtn from "../components/ToggleBtn";
import ToggleMenu from "../components/ToggleMenu";
import ToggleContainer from "../components/ToggleContainer"
import {useCallback, useRef} from 'react'
const NavBar: React.FC = () =>{

    const refToggleMenu = useRef<HTMLDivElement>(null)
    const refToggleBtn = useRef<HTMLDivElement>(null)   
    const handleUiToggleBtn =  useCallback((event: React.MouseEvent)=>{
        refToggleBtn.current?.classList.toggle("handleMenuButton")
        refToggleMenu.current?.classList.toggle("hideMenu")
    },[])

  
    return (<>
    <nav id={style.MyNavBar} >
        <div  id={style.MyNavBrand} >chỏ's blog</div>
        <ToggleBtn refProp={refToggleBtn} onClick={handleUiToggleBtn}></ToggleBtn>
        <ToggleContainer refProp={refToggleMenu}>
            <ToggleMenu ></ToggleMenu>
        </ToggleContainer>
    </nav>   
    </>)
}


export default NavBar;