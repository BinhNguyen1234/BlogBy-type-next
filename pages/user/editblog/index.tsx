import { ReactElement, useEffect, useReducer, useState } from 'react';
import EditBlog from '../../../components/EditBlog';
import LargeContentLayout from '../../../layout/LargeContentLayout';
import SearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { RootStateType } from '../../../feature';
import axios from 'axios';
import APIAuth from '../../../ulitlity/callApiWAuth';
import { DataType } from '../../../components/EditBlog';
import { useSelector } from 'react-redux';
interface InitialStateType {
   data: Array<DataType>;
   isLoading: boolean;
   displayedData: Array<DataType>;
   keyFilter: string;
   filter: string;
   page: number;
}
let filter = {fields: ['title', 'content']}
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
                        new RegExp(`${state.keyFilter}(.*)`, 'miu')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'miu'),
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
                     ).search(new RegExp(`${state.keyFilter}(.*)`, 'miu'));
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'miu'),
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
                        new RegExp(`${state.keyFilter}(.*)`, 'miu')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'miu'),
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
                     ).search(new RegExp(`${state.keyFilter}(.*)`, 'miu'));
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${state.keyFilter}(.*)`, 'miu'),
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
         return { ...state, page: action.payload? action.payload.page : state.page , isLoading: true };
      case 'Filter':
         return {
            ...state,
            isLoading: false,
            displayedData: (() => {
               if (state.filter == 'title') {
                  return state.data.reduce((pV: any, cV) => {
                     let positonSearchWordTitle = (cV.title as string).search(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'miu')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'miu'),
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
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'miu')
                     );
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${action.payload.keyFilter}(.*)`, 'miu'),
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
   let Api = new APIAuth();
   const isAuth = useSelector((state: RootStateType) => {
      return state.loginSliceReducers.isAuth;
   });
   const [state, dispatch] = useReducer(reducer, {
      data: defaultData,
      isLoading: true,
      displayedData: defaultData,
      keyFilter: '',
      filter: 'title',
      page: 1,
   });

   useEffect(() => {
      Api.callAPI({
         method: 'get',
         url: `/api/v1/user/editblog?page=${state.page}&key=${state.keyFilter}`,
      })
         .then((res) => {
            let data = res.data.map((object: any) => {
               return {
                  ...object,
                  date: new Date(object.date).toLocaleDateString(['ban', 'id']),
               };
            });
            dispatch({ type: 'Done', payload: { posts: data } });
         })
         .catch((e) => {
            console.log(e);
         });
   }, [state.page]);
   if (isAuth === true) {
      return (
         <>
            <LargeContentLayout>
               <SearchBar
                  stateCheck={state.filter}
                  href={`/api/v1/user/editblog?page=${state.page}&key=${state.keyFilter}`}
                  dispatch={dispatch}
                  filter={filter}
               ></SearchBar>
               <hr></hr>
               <EditBlog
                  isLoading={state.isLoading}
                  displayedData={state.displayedData}
               ></EditBlog>
               <Pagination page={state.page} setPage={dispatch}></Pagination>
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
