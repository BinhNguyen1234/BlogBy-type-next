import '../styles/Global.sass';
import 'bootstrap/dist/css/bootstrap.css';
import { wrapper } from '../feature';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import Layout from '../layout';
import { useEffect } from 'react';
import { LOGIN } from '../feature/login';
import jwt from 'jsonwebtoken';
import { getCookie } from '../ulitlity/ManupulateCookie';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
   const dispatch = useDispatch();
   useEffect(() => {
      const cookie = getCookie('rf');
      if (cookie) {
         const { username } = jwt.decode(getCookie('rf'));
         if (username) {
         }
         dispatch(LOGIN(username));
      }
   }, []);

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
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}

export default wrapper.withRedux(MyApp);
