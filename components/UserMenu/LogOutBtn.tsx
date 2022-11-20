import { ReactElement } from 'react';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../feature/login';
import router from 'next/router';
import {deleteCookie} from "../../ulitlity/ManupulateCookie"
export default function LogOutBtn(): ReactElement {
   const dispatch = useDispatch();
   // const logOutHandle = useCallback(() => {
   //    axios
   //       .post('api/v1/user/logout', {
   //          method: 'POST',
   //       })
   //       .then((response) => {
   //          if (response.status === 202) {
   //             dispatch(LOGOUT(null));
   //             router.push('/');
   //          }
   //       });
   // }, []);
   return (
      <>
         <div onClick={()=>{ deleteCookie("rf");dispatch(LOGOUT(null));router.push('/')}}>Log Out</div>
      </>
   );
}
