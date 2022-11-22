import axios from 'axios';
import { getCookie, deleteCookie } from '../ulitlity/ManupulateCookie';
import { useDispatch } from 'react-redux';
import { RELOGIN } from '../feature/login';
interface constructorType {
   method: string;
   url: string;
   data: any;
   headers?: any;
}
class APIAuth {
   dispatch = useDispatch();
   config = null;
   callAPI(config: constructorType) {
      const instance = axios.create();
      instance.interceptors.request.use(
         (request) => {
            if (!getCookie('acc')) {
               request.url = '/api/v1/getuser';
               request.headers = { Authorization: `Bearer ${getCookie('rf')}` };
               request.data = null;
            }
            return request;
         },
         (e) => {
            throw e;
         }
      );
      let a = instance.interceptors.response.use(
         (response) => {
            if (
               response.status == 299 &&
               response.data.message == 'Post successful'
            ) {
               return response;
            } else if (response.status == 201) {
               return instance({
                  ...config,
                  headers: { Authorization: `Bearer ${getCookie('acc')}` },
               });
            }
         },
         (e) => {
            if (e.response.status !== 401) {
               console.log(1);
               return Promise.reject(e);
            } else if (!getCookie('rf')) {
               console.log(2);
               this.dispatch(RELOGIN(null));
               return Promise.reject(e);
            } else {
               console.log(3);
               return instance({
                  ...config,
                  data: null,
                  url: '/api/v1/getuser',
                  headers: { Authorization: `Bearer ${getCookie('rf')}` },
               })
                  .then((response) => {
                     return instance({
                        ...config,
                        headers: {
                           Authorization: `Bearer ${getCookie('acc')}`,
                        },
                     });
                  })
                  .catch((e) => {
                     this.dispatch(RELOGIN(null));
                     return Promise.reject(e);
                  });
            }
         }
      );
      return instance({
         ...config,
         headers: {
            Authorization: `Bearer ${getCookie('acc')}`,
            ...config.headers,
         },
      });
   }
}

export default APIAuth;
