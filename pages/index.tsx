import React from 'react';
import Layout80 from '../layout/Layout80';
import IntroBlog from '../components/IntroBlog';
import LastestPost from '../components/LastestPost';
import SliderPost from '../components/LastestPost/SliderPost';
const Post = require('../Server/Model/post');
interface ReturnServerSide {
   data: any;
}
export async function getServerSideProps(context: any) {
   //  let lastestPost = await Post.find({}, {
   //    title: 1,
   //    date: 1,
   //    imgThumbnail: 1,
   //    url: 1,
   //    contentString: 1,
   //    _id: 0,
   // }).limit(8)
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
      .limit(8);
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
