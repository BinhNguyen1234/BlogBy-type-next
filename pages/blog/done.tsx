import { ReactElement, useEffect, memo, useState } from 'react';
import { RENDERED, RESET } from '../../feature/handleProgressBar';
import MainContentLayout from '../../layout/MainContentLayout';
import { useRouter } from 'next/router';
import PreviewBlogContainer from '../../components/PreviewBlog/PreviewBlogContainer';
import Pagination from '../../components/Pagination';
import { useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import LargeContentLayout from '../../layout/LargeContentLayout';
const blog = require('../../Server/Model/post');

export async function getServerSideProps({ req }: any) {
   let params = req.query.page;

   let data = await blog
      .aggregate()
      .sort({ date: -1 })
      .match({})
      .project({
         title: 1,
         date: 1,
         imgThumbnail: 1,
         url: 1,
         contentString: 1,
         _id: 0,
      })
      .skip((params ? params - 1 : 0) * 8)
      .limit(10);
   return {
      props: {
         params,
         data: data.map((object: any) => {
            return {
               ...object,
               date: object.date.toLocaleDateString(['ban', 'id']),
            };
         }),
      },
   };
}
function Page({ params, data }: any): ReactElement {
   const dispatch = useDispatch<any>();
   const router = useRouter();
   dispatch(RENDERED(null));
   useEffect(() => {
      if (!params) {
         router.push('/blog?page=1');
      }
   }, []);
   useEffect(() => {
      dispatch(RESET());
   });
   return (
      <>
         <MainContentLayout>
            <LargeContentLayout>
               <SearchBar filter={{ fields: ['title', 'content'] }}></SearchBar>
            </LargeContentLayout>
            <PreviewBlogContainer className={!data ? '--skeleton' : ''}>
               {data}
            </PreviewBlogContainer>
            <Pagination
               hrefToQuerry={'/blog?page='}
               page={parseInt(params || 1)}
            ></Pagination>
         </MainContentLayout>
      </>
   );
}

export default memo(Page);