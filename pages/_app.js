import '../styles/Global.sass';
import 'bootstrap/dist/css/bootstrap.css';
import { wrapper } from '../feature';
import 'react-quill/dist/quill.snow.css';

import Layout from '../layout/Layout';
function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
}

export default wrapper.withRedux(MyApp);
