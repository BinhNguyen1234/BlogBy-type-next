import { sha256 } from 'js-sha256';
import axios from 'axios';
import style from '../../styles/components/Login/LoginForm.module.sass';
import Image from 'next/image';
import thienImg from '../../public/image/thien.png';
import shadow from '../../public/image/shadow.png';
import LoginCloseModalBtn from './LoginCloseModalBtn';
import React, { useCallback, memo, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGINWITHTK } from '../../feature/login';
import { handleUI } from '../../feature/login/UISubmitBtn';
import SubmitBtn from '../../components/Login/SubmitBtn';
import { RootStateType } from '../../feature';
interface Props {
   hideModal: Function;
}
interface UserInfoType {
   username: any;
   password: any;
}
const LoginForm: React.FC<Props> = ({ hideModal }: Props) => {
   const dispatch = useDispatch();
   const message = useSelector((state: RootStateType) => {
      return state.UISubmitBtn.message;
   });
   const stateBtn = useSelector((state: RootStateType) => {
      return state.UISubmitBtn;
   });
   const sendRequesLogin = useCallback(
      async (e: any) => {
         e.preventDefault();
         dispatch(handleUI({ type: 'SEND' }));
         if (stateBtn.status != 'Try Again') {
            const UserInfo: UserInfoType = {
               username: e.target[0].value,
               password: sha256(e.target[1].value as string),
            };
            console.log(UserInfo);
            await axios
               .post('/api/v1/login/auth', UserInfo, {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  auth: UserInfo,
               })

               .then((response) => {
                  if (response.status === 201) {
                     dispatch(
                        LOGINWITHTK({
                           username: UserInfo.username,
                           token: response.data.token,
                        })
                     );
                     dispatch(handleUI({ type: 'SUCCESS' }));
                     hideModal('none');
                  }
               })
               .catch((err) => {
                  console.log(err);
                  dispatch(
                     handleUI({
                        type: 'FAILED',
                        message: `${err.response.status}: ${err.response.data}`,
                     })
                  );
               });
         } else {
            dispatch(handleUI({ type: 'SUCCESS' }));
         }
      },
      [stateBtn]
   );
   return (
      <>
         <div
            onClick={(e) => {
               e.stopPropagation();
            }}
            id={style.LoginForm_Container}
         >
            <LoginCloseModalBtn hideModal={hideModal}></LoginCloseModalBtn>
            <div id={style.LoginForm_Animated}>
               <div id={style.LoginForm_Img}>
                  <Image layout="fill" src={thienImg}></Image>
               </div>
               <div id={style.LoginFrom_shadow}>
                  <Image src={shadow}></Image>
               </div>
            </div>
            <div id={style.LoginForm}>
               <div>Hello Buddy</div>
               <form
                  action="/login/auth"
                  onSubmit={sendRequesLogin}
                  id="loginfeature"
                  method="post"
               >
                  <label htmlFor="username">Username</label>
                  <input
                     pattern="^[\x00-\x7F]*$"
                     id="username"
                     required
                     form="loginfeature"
                     name="username"
                     placeholder="Enter Username"
                  ></input>
                  <label htmlFor="password">Password</label>
                  <input
                     id="password"
                     required
                     form="loginfeature"
                     name="password"
                     placeholder="Enter password"
                     type="password"
                  ></input>
                  <p id={style.message}>{message}</p>
                  <SubmitBtn></SubmitBtn>
               </form>
            </div>
         </div>
      </>
   );
};

export default memo(LoginForm);
