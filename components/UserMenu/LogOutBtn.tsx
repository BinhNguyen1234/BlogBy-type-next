import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../feature/login';
import router from 'next/router';
import { deleteCookie } from '../../ulitlity/ManupulateCookie';
export default function LogOutBtn(): ReactElement {
   const dispatch = useDispatch();
   return (
      <>
         <div
            onClick={() => {
               deleteCookie('rf');
               deleteCookie('acc');
               dispatch(LOGOUT(null));
               router.push('/');
            }}
         >
            Log Out
         </div>
      </>
   );
}
