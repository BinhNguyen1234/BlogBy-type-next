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
         console.log()
         const { username } = jwt.decode(getCookie('rf'));
         if (username) {
         }
         dispatch(LOGIN(username));
      }

      const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js')
      const popoverTriggerList = document.querySelectorAll(
         '[data-bs-toggle="popover"]'
      );
      const popoverList = [...popoverTriggerList].map(
         (popoverTriggerEl) =>
            new bootstrap.Popover(popoverTriggerEl, {
               html: true,
            })
      );
   }, []);

   return (
      <>
      
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}

export default wrapper.withRedux(MyApp);
