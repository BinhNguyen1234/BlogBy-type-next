import { ReactElement } from 'react';
import Style from '../../styles/components/User/UserMenu.module.sass';
import LogOutBtn from './LogOutBtn';
import UserNavBtn from './UserNavBtn';
function MenuUser(): ReactElement {
   return (
      <>
         <ul id={Style.UserMenu}>
            <li>
               <UserNavBtn href="/user/writeblog">Write Blog</UserNavBtn>
            </li>
            <li>
               <UserNavBtn href="/user/editblog">Edit Blog</UserNavBtn>
            </li>
            <li>
               <UserNavBtn href="/user/information?edit=password">
                  Change Password
               </UserNavBtn>
            </li>
            <li>
               <LogOutBtn></LogOutBtn>
            </li>
         </ul>
      </>
   );
}
export default MenuUser;
