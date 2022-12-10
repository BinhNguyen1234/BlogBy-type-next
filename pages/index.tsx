import React from 'react';
import Layout80 from '../layout/Layout80';
import IntroBlog from '../components/IntroBlog';
import LastestPost from '../components/LastestPost';
import SliderPost from '../components/LastestPost/SliderPost';
function Home() {
   return (
      <>
         <Layout80>
            <IntroBlog></IntroBlog>
            <hr></hr>
            <LastestPost></LastestPost>
            <SliderPost></SliderPost>
            <hr></hr>
         </Layout80>
         
      </>
   );
}
export default Home;
