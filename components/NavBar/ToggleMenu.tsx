import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from '../../styles/components/ToggleMenu.module.sass';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../feature';

import { memo } from 'react';

interface Props {
   onClick: React.MouseEventHandler;
   showModal: Function;
   children?: string;
}

const MenuToggle: React.FC<Props> = ({ showModal, onClick }) => {
   const router = useRouter();

   const loginSlice = useSelector((state: RootStateType) => {
      return state.loginSliceReducers;
   });
   return (
      <>
         <ul id={style.MenuToggle}>
            <li
               className={
                  router.pathname.search(/\Wblog/gim) != -1 ? style.active : ''
               }
            >
               <Link href="/blog?page=1">
                  <a onClick={onClick}>Blog</a>
               </Link>
            </li>
            <li
               className={
                  router.pathname.search(/\Waboutme/gim) != -1
                     ? style.active
                     : ''
               }
            >
               <Link href="/aboutme">
                  <a onClick={onClick}>About Me</a>
               </Link>
            </li>
            <li
               className={
                  router.pathname.search(/\Wuser/gim) != -1 ? style.active : ''
               }
            >
               {loginSlice.infoUser == 'Login' ? (
                  <div
                     onClick={() => {
                        showModal('flex');
                     }}
                  >
                     Login
                  </div>
               ) : (
                  <Link href="/user">{loginSlice.infoUser}</Link>
               )}
            </li>
         </ul>
      </>
   );
};

export default memo(MenuToggle);
