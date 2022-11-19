import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from '../../styles/components/ToggleMenu.module.sass';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../feature';

import { memo } from 'react';

interface Props {
   showModal: Function;
   children?: string;
}

const MenuToggle: React.FC<Props> = ({ showModal, children }) => {
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
               <Link href="/blog?page=1">Blog</Link>
            </li>
            <li
               className={
                  router.pathname.search(/\Waboutme/gim) != -1
                     ? style.active
                     : ''
               }
            >
               <Link href="/aboutme">About Me</Link>
            </li>
            <li
               className={
                  router.pathname.search(/\Wuser/gim) != -1 ? style.active : ''
               }
            >
               {loginSlice.isAuth ? (
                  <Link href="/user">{'Hi, ' + loginSlice.infoUser}</Link>
               ) : (
                  <div
                     onClick={() => {
                        showModal('flex');
                     }}
                  >
                     Login
                  </div>
               )}
            </li>
         </ul>
      </>
   );
};

export default memo(MenuToggle);
