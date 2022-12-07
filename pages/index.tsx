import React from 'react';
import MainContentLayout from '../layout/MainContentLayout';
import IntroBlog from '../components/IntroBlog';
function Home() {
   return (
      <>
         <MainContentLayout>
            <IntroBlog></IntroBlog>
         </MainContentLayout>
      </>
   );
}
export default Home;
