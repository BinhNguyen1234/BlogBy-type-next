import {
   FormEventHandler,
   ReactElement,
   useEffect,
   useReducer,
   useState,
} from 'react';
import EditBlog from '../../../components/EditBlog';
import LargeContentLayout from '../../../layout/LargeContentLayout';
import SearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { RootStateType } from '../../../feature';
import axios from 'axios';
import APIAuth from '../../../ulitlity/callApiWAuth';
import { DataType } from '../../../components/EditBlog';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
interface InitialStateType {
   data: Array<DataType>;
   isLoading: boolean;
   displayedData: Array<DataType>;
   keyFilter: string;
   filter: string;
}
let filter = { fields: ['title', 'content'] };
function reducer(state: InitialStateType, action: any) {
   switch (action.type) {
      case 'Done':
         return {
            ...state,
            data: action.payload.posts,
            displayedData: (() => {
               if (state.filter == 'title') {
                  return action.payload.posts.reduce((pV: any, cV: any) => {
                     let positonSearchWordTitle = (cV.title as string).search(
                        new RegExp(`${state.keyFilter}(.*)`, 'gmius')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.title.slice(
                        positonSearchWordTitle,
                        positonSearchWordTitle + state.keyFilter.length
                     );
                     headAndTrailTitle.splice(1, 0, body as string);
                     if (positonSearchWordTitle >= 0) {
                        pV.push({
                           ...cV,
                           title: headAndTrailTitle,
                           contentString: ['', '', cV.contentString as string],
                        });
                     }
                     return pV;
                  }, []);
               } else if (state.filter == 'content') {
                  return action.payload.posts.reduce((pV: any, cV: any) => {
                     let positonSearchWordContent = (
                        cV.contentString as string
                     ).search(new RegExp(`${state.keyFilter}(.*)`, 'gmius'));
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.contentString.slice(
                        positonSearchWordContent,
                        positonSearchWordContent + state.keyFilter.length
                     );
                     headAndContent.splice(1, 0, body as string);
                     if (positonSearchWordContent >= 0) {
                        pV.push({
                           ...cV,
                           title: ['', '', cV.title],
                           contentString: headAndContent,
                        });
                     }
                     return pV;
                  }, []);
               }
            })(),
            isLoading: false,
         };
      case 'Checked':
         return {
            ...state,
            filter: action.payload.filter,
            displayedData: (() => {
               if (action.payload.filter == 'title') {
                  return state.data.reduce((pV: any, cV) => {
                     let positonSearchWordTitle = (cV.title as string).search(
                        new RegExp(`${state.keyFilter}(.*)`, 'gmius')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.title.slice(
                        positonSearchWordTitle,
                        positonSearchWordTitle + state.keyFilter.length
                     );
                     headAndTrailTitle.splice(1, 0, body as string);
                     if (positonSearchWordTitle >= 0) {
                        pV.push({
                           ...cV,
                           title: headAndTrailTitle,
                           contentString: ['', '', cV.contentString as string],
                        });
                     }
                     return pV;
                  }, []);
               } else if (action.payload.filter == 'content') {
                  return state.data.reduce((pV: any, cV) => {
                     let positonSearchWordContent = (
                        cV.contentString as string
                     ).search(new RegExp(`${state.keyFilter}(.*)`, 'gmius'));
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.contentString.slice(
                        positonSearchWordContent,
                        positonSearchWordContent + state.keyFilter.length
                     );
                     headAndContent.splice(1, 0, body as string);
                     if (positonSearchWordContent >= 0) {
                        pV.push({
                           ...cV,
                           title: ['', '', cV.title],
                           contentString: headAndContent,
                        });
                     }
                     return pV;
                  }, []);
               }
            })(),
         };
      case 'Sent':
         return {
            ...state,
            isLoading: true,
         };
      case 'Filter':
         return {
            ...state,
            isLoading: false,
            displayedData: (() => {
               if (state.filter == 'title') {
                  return state.data.reduce((pV: any, cV) => {
                     let positonSearchWordTitle = (cV.title as string).search(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'gmius')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.title.slice(
                        positonSearchWordTitle,
                        positonSearchWordTitle + action.payload.keyFilter.length
                     );
                     headAndTrailTitle.splice(1, 0, body as string);
                     if (positonSearchWordTitle >= 0) {
                        pV.push({
                           ...cV,
                           title: headAndTrailTitle,
                           contentString: ['', '', cV.contentString as string],
                        });
                     }
                     return pV;
                  }, []);
               } else if (state.filter == 'content') {
                  return state.data.reduce((pV: any, cV) => {
                     let positonSearchWordContent = (
                        cV.contentString as string
                     ).search(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'gmius')
                     );
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.contentString.slice(
                        positonSearchWordContent,
                        positonSearchWordContent +
                           action.payload.keyFilter.length
                     );
                     headAndContent.splice(1, 0, body as string);
                     if (positonSearchWordContent >= 0) {
                        pV.push({
                           ...cV,
                           title: ['', '', cV.title],
                           contentString: headAndContent,
                        });
                     }
                     return pV;
                  }, []);
               }
            })(),
            keyFilter: action.payload.keyFilter,
         };
      default:
         throw new Error();
   }
}
//-----invoked
export default function EditBlogPage(): ReactElement {
   const defaultData = [
      {
         title: [[], [], 'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
         contentString: [[], [], 'this is simulate content'],
      },
      {
         title: [[], [], 'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
         contentString: [[], [], 'this is simulate content'],
      },
   ];
   const router = useRouter();
   let Api = new APIAuth();
   let submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: 'Sent' });

      const page = isNaN(parseInt(router.query.page as string))
         ? 1
         : parseInt(router.query.page as string);
      router.push(
         `/user/editblog?page=${page > 1 ? 1 : page}&key=${
            state.keyFilter
         }&filter=${state.filter}`
      );
   };
   const isAuth = useSelector((state: RootStateType) => {
      return state.loginSliceReducers.isAuth;
   });
   const [state, dispatch] = useReducer(reducer, {
      data: defaultData,
      isLoading: true,
      displayedData: defaultData,
      keyFilter: '',
      filter: 'title',
   });

   useEffect(() => {
      if (router.isReady) {
         const page = isNaN(parseInt(router.query.page as string))
            ? 1
            : parseInt(router.query.page as string);
         Api.callAPI({
            method: 'get',
            url: `/api/v1/user/editblog?page=${page || 1}&key=${
               state.keyFilter
            }&filter=${state.filter}`,
         })
            .then((res) => {
               let data = res.data.map((object: any) => {
                  return {
                     ...object,
                     date: new Date(object.date).toLocaleDateString([
                        'ban',
                        'id',
                     ]),
                  };
               });
               dispatch({ type: 'Done', payload: { posts: data } });
            })
            .catch((e) => {
               dispatch({ type: 'Done', payload: { posts: [] } });
            });
      }
   }, [router]);
   if (isAuth === true) {
      return (
         <>
            <LargeContentLayout>
               <SearchBar
                  defaultValue={state.keyFilter}
                  stateCheck={state.filter}
                  dispatch={dispatch}
                  filter={filter}
                  onSubmit={submitHanlder}
               ></SearchBar>
               <hr></hr>
               <EditBlog
                  isLoading={state.isLoading}
                  displayedData={state.displayedData}
               ></EditBlog>
               <Pagination
                  page={
                     router.query.page
                        ? parseInt(router.query.page as string)
                        : 1
                  }
                  hrefToQuerry={`/user/editblog?page=`}
               ></Pagination>
            </LargeContentLayout>
         </>
      );
   } else {
      return (
         <>
            <div>please login</div>
         </>
      );
   }
}
