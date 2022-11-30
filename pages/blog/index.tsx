import { ReactElement, useReducer, useEffect, useState } from 'react';
import { RENDERED, RESET } from '../../feature/handleProgressBar';
import MainContentLayout from '../../layout/MainContentLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import PreviewBlogContainer from '../../components/PreviewBlog/PreviewBlogContainer';
import Pagination from '../../components/Pagination';
import { useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import LargeContentLayout from '../../layout/LargeContentLayout';

/////
let filter = { fields: ['title', 'content'] };
const defaultData = [
   {
      title: 'this is simulate title number 1',
      url: 'simulate-url-1',
      date: '10/10/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 2',
      url: 'simulate-url-2',
      date: '20/12/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 1',
      url: 'simulate-url-1',
      date: '10/10/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 2',
      url: 'simulate-url-2',
      date: '20/12/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 1',
      url: 'simulate-url-1',
      date: '10/10/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 2',
      url: 'simulate-url-2',
      date: '20/12/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 1',
      url: 'simulate-url-1',
      date: '10/10/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
   {
      title: 'this is simulate title number 2',
      url: 'simulate-url-2',
      date: '20/12/2020',
      contentString: 'this is simulate content',
      imgThumbnail: 'null',
   },
];
import { DataType } from '../../components/EditBlog';
// export async function getServerSideProps({ req }: any) {
//    let params = req.query.page;

//    let data = await blog
//       .aggregate()
//       .sort({ date: -1 })
//       .match({})
//       .project({
//          title: 1,
//          date: 1,
//          imgThumbnail: 1,
//          url: 1,
//          contentString: 1,
//          _id: 0,
//       })
//       .skip((params ? params - 1 : 0) * 8)
//       .limit(8);
//    return {
//       props: {
//          params,
//          data: data.map((object: any) => {
//             return {
//                ...object,
//                date: object.date.toLocaleDateString(['ban', 'id']),
//             };
//          }),
//       },
//    };
// }
interface InitialStateType {
   data: Array<DataType>;
   isLoading: boolean;
   displayedData: Array<DataType>;
   keyFilter: string;
   filter: string;
   page: string;
}

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
            page: action.payload ? action.payload.page : state.page,
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
function Page(): ReactElement | null {
   const [state, dispatch] = useReducer(reducer, {
      data: defaultData,
      isLoading: true,
      displayedData: defaultData,
      keyFilter: '',
      filter: 'title',
      page: null,
   });
   console.log(state.page, 'page');
   const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (state.page == 1) {
         dispatch({ type: 'Sent' });
         axios({
            method: 'get',
            url: `api/v1/blog/getblog?page=${
               typeof state.page == 'string' ? 1 : state.page
            }&key=${state.keyFilter}&filter=${state.filter}`,
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
               console.log(e);
            });
      } else {
         dispatch({ type: 'Sent', payload: { page: 1 } });
      }
   };
   useEffect(() => {
      if (state.page != null) {
         axios({
            method: 'get',
            url: `api/v1/blog/getblog?page=${
               typeof state.page == 'string' ? 1 : state.page
            }&key=${state.keyFilter}&filter=${state.filter}`,
         })
            .then((res) => {
               let data = res.data;
              
               dispatch({ type: 'Done', payload: { posts: data } });
            })
            .catch((e) => {
               console.log(e);
            });
      } else {
         const query = window.location.search;
         const param = new URLSearchParams(query);
         let page = parseInt(param.get('page') as string);
         console.log(page);
         dispatch({
            type: 'Sent',
            payload: {
               page: typeof page ? page : 1,
            },
         });
      }
   }, [state.page]);
   return (
      <>
         <MainContentLayout>
            <LargeContentLayout>
               <SearchBar
                  onSubmit={submitHanlder}
                  stateCheck={state.filter}
                  dispatch={dispatch}
                  filter={filter}
               ></SearchBar>
            </LargeContentLayout>
            <PreviewBlogContainer
               className={state.isLoading ? '--skeleton' : ''}
            >
               {state.displayedData}
            </PreviewBlogContainer>
            <Pagination
               setPage={dispatch}
               page={parseInt(state.page)}
            ></Pagination>
         </MainContentLayout>
      </>
   );
}

export default Page;
