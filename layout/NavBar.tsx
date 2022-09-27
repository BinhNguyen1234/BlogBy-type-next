import Link from "next/link"
import { useSelector } from "react-redux";
import style from "../styles/Layouts/NavBar.module.sass"
import ToggleBtn from "../components/ToggleBtn";
import ToggleMenu from "../components/ToggleMenu";
import ToggleContainer from "../components/ToggleContainer"
import React, {useCallback, useRef} from 'react'
import axios from "axios"
import { RootStateType } from "../feature";

interface Props {
    showModal: Function
}

const NavBar: React.FC<Props> = ({showModal}) =>{
    const infoUser = useSelector((state:RootStateType)=>{return state.loginSliceReducers.infoUser})
    const refToggleMenu = useRef<HTMLDivElement>(null)
    const refToggleBtn = useRef<HTMLDivElement>(null)   
    const handleUiToggleBtn =  useCallback((event: React.MouseEvent)=>{
        refToggleBtn.current?.classList.toggle("handleMenuButton")
        refToggleMenu.current?.classList.toggle("hideMenu")
    },[])
   
  
    return (<>
    <nav   id={style.MyNavBar} >
        <div className={style.NavStyle}  id={style.MyNavBrand} ><Link href="/">chỏ's blog</Link></div>
        <ToggleBtn refProp={refToggleBtn} onClick={handleUiToggleBtn}></ToggleBtn> {/*use in mode non-lap-pc*/}
        <ToggleContainer refProp={refToggleMenu}>
            <ToggleMenu showModal={showModal} ></ToggleMenu>
        </ToggleContainer>
        
    </nav>
    <div id={style.FakeNav} className={style.NavStyle}>2</div> {/* Fake a div underbath nav to push content bellow nav*/}  
    </>)
}


export default NavBar;