import Link from 'next/link';
import { useDispatch } from 'react-redux';
import style from '../styles/Layouts/NavBar.module.sass';
import ToggleBtn from '../components/NavBar/ToggleBtn';
import ToggleMenu from '../components/NavBar/ToggleMenu';
import ToggleContainer from '../components/NavBar/ToggleContainer';
import React, { useRef, memo } from 'react';

interface Props {
   showModal: Function;
}

const NavBar: React.FC<Props> = ({ showModal }) => {
   const thisRef = useRef<HTMLElement>(null);
   const opacityElement = useRef<HTMLDivElement>(null);
   const refToggleMenu = useRef<HTMLDivElement>(null);
   const refToggleBtn = useRef<HTMLDivElement>(null);
   const handleUiToggleBtn = (event: React.MouseEvent) => {
      refToggleBtn.current?.classList.toggle('handleMenuButton');
      refToggleMenu.current?.classList.toggle('hideMenu');
      opacityElement.current?.classList.toggle('displayBlock');
   };
   const hanldeToogleMenu = (event: React.MouseEvent) => {
      refToggleMenu.current?.classList.toggle('hideMenu');
      refToggleBtn.current?.classList.toggle('handleMenuButton');
      opacityElement.current?.classList.remove('displayBlock');
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
                  width: '100vw',
                  height: '100vh',
                  display: 'none',
                  backgroundColor: 'rgba(0,0,0,0.7)',
               }}
            ></div>
            <ToggleBtn
               refProp={refToggleBtn}
               onClick={handleUiToggleBtn}
            ></ToggleBtn>{' '}
            {/*use in mode non-lap-pc*/}
            <ToggleContainer refProp={refToggleMenu}>
               <ToggleMenu
                  onClick={hanldeToogleMenu}
                  showModal={showModal}
               ></ToggleMenu>
            </ToggleContainer>
         </nav>
         <div id={style.FakeNav} className={style.NavStyle}>
            2
         </div>{' '}
         {/* Fake a div underbath nav to push content bellow nav*/}
      </>
   );
};

export default memo(NavBar);
