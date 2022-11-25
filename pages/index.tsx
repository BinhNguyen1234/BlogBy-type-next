import React from 'react';

// }
import { useRouter } from 'next/router';
function Home(/*{ data }: Propstype*/) {
   const router = useRouter();
   const assign = () => {};
   return (
      <>
         <div
            onClick={() => {
               window.history.pushState('no', 'no', '/blog=page1');
            }}
         >
            Hello
         </div>
      </>
   );
}
export default Home;
