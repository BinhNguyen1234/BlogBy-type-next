import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/Layouts/NavBar.module.sass';
import ToggleBtn from '../components/NavBar/ToggleBtn';
import ToggleMenu from '../components/NavBar/ToggleMenu';
import ToggleContainer from '../components/NavBar/ToggleContainer';
import React, { useRef } from 'react';
import axios from 'axios';
import { RootStateType } from '../feature';
import { handleReadMode, handleReadModeFalse } from '../feature/readMode';
interface Props {
   showModal: Function;
}

const NavBar: React.FC<Props> = ({ showModal }) => {
   const dispatch = useDispatch();
   const isReadMode = useSelector((state: RootStateType) => {
      return state.readMode.read;
   });

   const thisRef = useRef<HTMLElement>(null);
   const opacityElement = useRef<HTMLDivElement>(null);
   const refToggleMenu = useRef<HTMLDivElement>(null);
   const refToggleBtn = useRef<HTMLDivElement>(null);
   const handleUiToggleBtn = (event: React.MouseEvent) => {
      refToggleBtn.current?.classList.toggle('handleMenuButton');
      refToggleMenu.current?.classList.toggle('hideMenu');
      opacityElement.current?.classList.toggle('displayBlock');
   };
   // useEffect(()=>{
   //     let prevScroll = 0
   //     window.addEventListener('scroll', handleScroll,{passive : true})
   //     function handleScroll(){
   //         var currentScrollPos = window.scrollY;
   //         if (currentScrollPos - prevScroll > 10 ) {

   //             dispatch(handleReadMode(null))

   //         } else if (currentScrollPos - prevScroll < -10 || currentScrollPos == 0) {

   //             dispatch(handleReadModeFalse(null))

   //         }
   //         prevScroll = currentScrollPos;

   //     }

   // },[])

   return (
      <>
         <nav
            ref={thisRef}
            style={isReadMode ? { top: '-100%' } : { top: '0%' }}
            id={style.MyNavBar}
         >
            <div className={style.NavStyle} id={style.MyNavBrand}>
               <Link href="/">Tee's blog</Link>
            </div>
            <div
               ref={opacityElement}
               onClick={handleUiToggleBtn}
               style={{
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  display: 'none',
                  backgroundColor: 'rgba(0,0,0,0.5)',
               }}
            ></div>
            <ToggleBtn
               refProp={refToggleBtn}
               onClick={handleUiToggleBtn}
            ></ToggleBtn>{' '}
            {/*use in mode non-lap-pc*/}
            <ToggleContainer refProp={refToggleMenu}>
               <ToggleMenu showModal={showModal}></ToggleMenu>
            </ToggleContainer>
         </nav>
         <div id={style.FakeNav} className={style.NavStyle}>
            2
         </div>{' '}
         {/* Fake a div underbath nav to push content bellow nav*/}
      </>
   );
};

export default NavBar;
