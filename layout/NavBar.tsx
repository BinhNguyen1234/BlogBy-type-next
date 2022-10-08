import Link from "next/link"
import { useSelector,useDispatch } from "react-redux";
import style from "../styles/Layouts/NavBar.module.sass"
import ToggleBtn from "../components/ToggleBtn";
import ToggleMenu from "../components/ToggleMenu";
import ToggleContainer from "../components/ToggleContainer"
import React, {useCallback, useRef, useEffect} from 'react'
import axios from "axios"
import { RootStateType } from "../feature";
import {handleReadMode,handleReadModeFalse} from "../feature/readMode"
interface Props {
    showModal: Function
}

const NavBar: React.FC<Props> = ({showModal}) =>{
    
    const dispatch = useDispatch()
    const isReadMode = useSelector((state:RootStateType)=>{return state.readMode.read})
    
    const thisRef = useRef<HTMLElement>(null)
    const refToggleMenu = useRef<HTMLDivElement>(null)
    const refToggleBtn = useRef<HTMLDivElement>(null)   
    const handleUiToggleBtn =  useCallback((event: React.MouseEvent)=>{
        refToggleBtn.current?.classList.toggle("handleMenuButton")
        refToggleMenu.current?.classList.toggle("hideMenu")
    },[])
    useEffect(()=>{
        let prevScroll = 0
        window.addEventListener('scroll', handleScroll,{passive : true})
        function handleScroll(){
            var currentScrollPos = window.scrollY;
            if (currentScrollPos - prevScroll > 10 ) {
                
                dispatch(handleReadMode(null))
               
                
            } else if (currentScrollPos - prevScroll < -4 || currentScrollPos == 0) {
                
                dispatch(handleReadModeFalse(null))
                
            }
            prevScroll = currentScrollPos;
            
            
        }
       
        
    },[])
   
  
    return (<>
    <nav  ref={thisRef} style={isReadMode?{"top":"-100%"}:{"top":"0%"}}  id={style.MyNavBar} >
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