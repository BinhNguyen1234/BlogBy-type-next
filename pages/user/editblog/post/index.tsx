import { ReactElement, useLayoutEffect, useState } from 'react';
import { withRouter } from 'next/router';
import BlogEditor from '../../../../components/BlogEditor';
import LargeContentLayout from '../../../../layout/LargeContentLayout';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../../feature';
import { useRouter } from 'next/router';
import axios from 'axios';
import APIAuth from '../../../../ulitlity/callApiWAuth';
export default function EditPost(): ReactElement {
   const router = useRouter()
   const API = new APIAuth();
   console.log(router);
   const [value, setValue] = useState(null);
   const isAuth = useSelector((state: RootStateType) => {
      return state.loginSliceReducers.isAuth;
   });
   useLayoutEffect(() => {
      API.callAPI({
         method: 'get',
         url: `/api/v1/blog?url=${router.query.url}`,
      })
         .then((res) => {
            setValue(res.data)
            console.log("set Value")
         })
         .catch((e) => {
            console.log(e);
         });
   }, []);
   if (isAuth === true) {
      return (
         <>
            <LargeContentLayout>
               <BlogEditor
                  value={value}
                  href={`/api/v1/user/editblog/post?url=${router.query.url}`}
               ></BlogEditor>
            </LargeContentLayout>
         </>
      );
   } else {
      return (
         <>
            <div>please login</div>
         </>
      );
   }
};
