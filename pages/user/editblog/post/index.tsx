import { ReactElement, useLayoutEffect, useState } from 'react';
import { withRouter } from 'next/router';
import BlogEditor from '../../../../components/BlogEditor';
import LargeContentLayout from '../../../../layout/LargeContentLayout';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../../feature';
import axios from 'axios';
export default withRouter(function EditPost({ router }): ReactElement {
   const [value, setValue] = useState(null);
   const isAuth = useSelector((state: RootStateType) => {
      return state.loginSliceReducers.isAuth;
   });
   useLayoutEffect(() => {
      axios({
         method: 'get',
         url: `/api/v1/blog?url=${router.query.url}`,
      })
         .then((res) => {
            setValue(res.data);
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
});
