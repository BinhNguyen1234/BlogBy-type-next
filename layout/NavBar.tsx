import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/Layouts/NavBar.module.sass';
import ToggleBtn from '../components/NavBar/ToggleBtn';
import ToggleMenu from '../components/NavBar/ToggleMenu';
import ToggleContainer from '../components/NavBar/ToggleContainer';
import React, { useRef } from 'react';
import { RootStateType } from '../feature';

interface Props {
   showModal: Function;
}

const NavBar: React.FC<Props> = ({ showModal }) => {
   const dispatch = useDispatch();

   const thisRef = useRef<HTMLElement>(null);
   const opacityElement = useRef<HTMLDivElement>(null);
   const refToggleMenu = useRef<HTMLDivElement>(null);
   const refToggleBtn = useRef<HTMLDivElement>(null);
   const handleUiToggleBtn = (event: React.MouseEvent) => {
      refToggleBtn.current?.classList.toggle('handleMenuButton');
      refToggleMenu.current?.classList.toggle('hideMenu');
      opacityElement.current?.classList.toggle('displayBlock');
   };

   return (
      <>
         <nav ref={thisRef} id={style.MyNavBar}>
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
