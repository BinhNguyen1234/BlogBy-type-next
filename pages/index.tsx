import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import { LOGINSSR, LOGIN } from '../feature/login';
interface ContextType {
   req: any;
}
export function getServerSideProps({ req }: ContextType) {
   interface data {
      infoUser: string;
      isAuth: boolean;
   }
   let data: data = {
      infoUser: 'Login',
      isAuth: false,
   };
   try {
      data = {
         infoUser: req.user.username,
         isAuth: true,
      };
   } catch (e) {
      if (e) {
         console.log('Not in log-in /pages/index.txs line 26 ');
      }
   }
   return {
      props: {
         data: data,
      },
   };
}
interface Propstype {
   data: any;
}

function Home({ data }: Propstype) {
   const dispatch = useDispatch();
   useEffect(() => {
      process.env.NODE_ENV == 'production'
         ? dispatch(LOGINSSR(data))
         : dispatch(LOGIN('Dev')); // on product
      // dispatch(LOGIN("Dev")) // one Dev
   }, []);
   return (
      <>
         <div>
            <Link href="/user/editblog/test2?url=toimuontest&check=true">
               Hello
            </Link>
         </div>
      </>
   );
}
export default Home;
