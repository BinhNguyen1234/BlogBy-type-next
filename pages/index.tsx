import React from 'react';
import { wrapper } from '../feature';
// }
import { useRouter } from 'next/router';

// export const getServerSideProps = wrapper.getServerSideProps(
//    (store) =>
//    {return async ({ params }) => {
//        // we can set the initial state from here
//        // we are setting to false but you can run your custom logic here
//        console.log("State on server", store.getState());
//        return {
//          props: {
//            authState: false,
//          },
//        };
//      }}
//  );
function Home(/*{ data }: Propstype*/) {
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
