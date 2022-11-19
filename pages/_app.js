import '../styles/Global.sass';
import 'bootstrap/dist/css/bootstrap.css';
import { wrapper } from '../feature';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import Layout from '../layout/Layout';
import { useEffect } from 'react';
import { LOGINSSR, LOGIN } from '../feature/login';
import jwt from 'jsonwebtoken';
function MyApp({ Component, pageProps }) {
   const dispatch = useDispatch();
   useEffect(() => {
      if (document.cookie) {
         console.log(document.cookie);
         const { username } = jwt.verify(
            document.cookie.substring(3, document.cookie.length),
            '170116Abcrefresh'
         );
         dispatch(LOGIN(username));
      }
   }, []);

   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default wrapper.withRedux(MyApp);
