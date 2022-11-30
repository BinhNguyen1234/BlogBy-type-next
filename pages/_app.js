import '../styles/Global.sass';
import 'bootstrap/dist/css/bootstrap.css';
import { wrapper } from '../feature';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import Layout from '../layout/Layout';
import { useEffect } from 'react';
import { LOGIN } from '../feature/login';
import jwt from 'jsonwebtoken';
import { getCookie } from '../ulitlity/ManupulateCookie';
function MyApp({ Component, pageProps }) {
   // const dispatch = useDispatch();
   // useEffect(() => {
   //    console.log(Component, "Props")
   //    const cookie = getCookie('rf');
   //    if (cookie) {
   //       const { username } = jwt.decode(getCookie('rf'));
   //       if (username) {
   //       }
   //       dispatch(LOGIN(username));
   //    }
   // }, []);

   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default wrapper.withRedux(MyApp);
