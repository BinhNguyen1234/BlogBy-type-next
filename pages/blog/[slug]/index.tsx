import { ReactElement, useEffect } from 'react';
import LargeContentLayout from '../../../layout/LargeContentLayout';
import DecodeDelta from '../../../components/Post/DecodeDelta';
import BackPostBtn from '../../../components/Post/BackPostBtn';
import { RESET, RENDERED } from '../../../feature/handleProgressBar';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
const blog = require('../../../Server/Model/post');

export async function getServerSideProps(context: any) {
   const url = context.params.slug;
   try {
      const data = await blog
         .findOne(
            {
               url: url,
            },
            { title: 1, content: 1, url: 1, imgThumbnail: 1, _id: 0 }
         )
         .then((blog: any) => {
            if (!blog) {
               throw new Error(`No post when find`);
            }
            return {
               imgThumbnail: blog.imgThumbnail,
               url: blog.url,
               title: blog.title,
               content: blog.content,
            };
         })
         .catch((e: Error) => {
            console.log(e);
            return { error: '404' };
         });
      return {
         props: {
            imgThumbnail: data.imgThumbnail,
            url: data.url,
            title: data.title,
            content: data.content,
         },
      };
   } catch (e) {
      return { props: { error: e } };
   }
}
type Props = Awaited<ReturnType<typeof getServerSideProps>>;
export default function Post({
   title,
   content,
   imgThumbnail,
   url,
}: any): ReactElement {
   console.log('post render');
   const dispatch = useDispatch<any>();
   dispatch(RENDERED(null));
   useEffect(() => {
      dispatch(RESET());
   }, []);
   return (
      <>
         <Head>
            <meta property="og:locale" content="vi_VN"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image:alt" content={`${title}`}></meta>
            <meta
               property="og:url"
               content={`http://103.161.172.66/blog/post/${url}`}
            ></meta>
            <meta name="description" content={`${title}`}></meta>
            <meta property="og:description" content={`${title}`}></meta>
            <meta
               property="og:image"
               content={`http://103.161.172.66${imgThumbnail || '/null'}`}
            ></meta>
            <meta property="og:title" content={`${title}`}></meta>
            <title>{title}</title>
         </Head>
         <LargeContentLayout>
            <BackPostBtn>{title}</BackPostBtn>
            <h2 style={{ color: 'rgb(106,76,67)' }}>{title}</h2>
            <DecodeDelta readOnly={true}>{content}</DecodeDelta>
         </LargeContentLayout>
      </>
   );
}
