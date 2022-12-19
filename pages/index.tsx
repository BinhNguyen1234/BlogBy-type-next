import React from 'react';
import Head from 'next/head';
import Layout80 from '../layout/Layout80';
import IntroBlog from '../components/IntroBlog';
import LastestPost from '../components/LastestPost';
import SliderPost from '../components/LastestPost/SliderPost';
const Post = require('../Server/Model/post');
interface ReturnServerSide {
   data: any;
}
export async function getServerSideProps(context: any) {
   let data = await Post.aggregate()
      .match({})
      .project({
         title: 1,
         date: 1,
         imgThumbnail: 1,
         url: 1,
         contentString: 1,
         _id: 0,
      })
      .sort({ date: -1 })
      .limit(6);
   return {
      props: {
         data: data.map((object: any) => {
            return {
               ...object,
               contentString: [, , object.contentString],
               title: [object.title, ,],
               date: object.date.toLocaleDateString(['ban', 'id']),
            };
         }),
      },
   };
}
function Home({ data }: ReturnServerSide) {
   return (
      <>
         <Head>
            <meta property="og:locale" content="vi_VN"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image:alt" content={`Tee Blog`}></meta>
            <meta property="og:url" content={`http://103.161.172.66`}></meta>
            <meta name="description" content={`LOVE - LIGHT - FREEDOM`}></meta>
            <meta
               property="og:description"
               content={`LOVE - LIGHT - FREEDOM`}
            ></meta>
            <meta
               property="og:image"
               content={`http://103.161.172.66/external/upload-name-1671459695907-641779674.png`}
            ></meta>
            <meta property="og:title" content={`Blog của tee`}></meta>
            <title>Tee Blog</title>
         </Head>
         <IntroBlog></IntroBlog>
         <Layout80>
            <hr></hr>
            <LastestPost></LastestPost>
            <SliderPost data={data}></SliderPost>
            <hr></hr>
         </Layout80>
      </>
   );
}
export default Home;
