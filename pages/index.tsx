import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import { LOGINSSR, LOGIN } from '../feature/login';
import { useRouter } from 'next/router';
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
   const router = useRouter()
   const dispatch = useDispatch();
   useEffect(() => {
      process.env.NODE_ENV == 'production'
         ? dispatch(LOGINSSR(data))
         : dispatch(LOGIN('Dev')); // on product
      // dispatch(LOGIN("Dev")) // one Dev
   }, []);
   return (
      <>
         <div onClick={()=>{
            router.push({
               pathname: "blog",
               query: {page: 1}
            },undefined,{shallow: true})
         }} >
            
               Hello
           
         </div>
      </>
   );
}
export default Home;
