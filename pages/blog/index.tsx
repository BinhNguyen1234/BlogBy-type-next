import { ReactElement, useReducer, useEffect } from 'react';
import MainContentLayout from '../../layout/MainContentLayout';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import PreviewBlogContainer from '../../components/PreviewBlog/PreviewBlogContainer';
import Pagination from '../../components/Pagination';
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
import { useDispatch } from 'react-redux';
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
}

function reducer(state: InitialStateType, action: any) {
   switch (action.type) {
      case 'Done':
         const filter = action.payload.filter || state.filter;
         const keyFilter = action.payload.keyFilter || state.keyFilter;
         return {
            filter,
            keyFilter,
            isLoading: false,
            data: action.payload.posts,
            displayedData: (() => {
               if (filter == 'title') {
                  return action.payload.posts.reduce((pV: any, cV: any) => {
                     let positonSearchWordTitle = (cV.title as string).search(
                        new RegExp(`${keyFilter}(.*)`, 'gmius')
                     );
                     let headAndTrailTitle = (cV.title as string).split(
                        new RegExp(`${keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.title.slice(
                        positonSearchWordTitle,
                        positonSearchWordTitle + keyFilter.length
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
               } else if (filter == 'content') {
                  return action.payload.posts.reduce((pV: any, cV: any) => {
                     let positonSearchWordContent = (
                        cV.contentString as string
                     ).search(new RegExp(`${keyFilter}(.*)`, 'gmius'));
                     let headAndContent = (cV.contentString as string).split(
                        new RegExp(`${keyFilter}(.*)`, 'gmius'),
                        2
                     );
                     let body = cV.contentString.slice(
                        positonSearchWordContent,
                        positonSearchWordContent + keyFilter.length
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
function Page(): ReactElement | null {
   const [state, dispatch] = useReducer(reducer, {
      data: defaultData,
      isLoading: true,
      displayedData: defaultData,
      keyFilter: '',
      filter: 'title',
   });
   const router = useRouter();

   const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch({ type: 'Sent' });
      router.push(
         `/blog?page=${
            parseInt(router.query.page as string) > 1 ? 1 : router.query.page
         }&key=${state.keyFilter}&filter=${state.filter}`
      );
   };
   useEffect(() => {
      const handleRouterChange = (url: string, { shallow }: any) => {
         dispatch({ type: 'Sent' });
      };
      router.events.on('routeChangeStart', handleRouterChange);
      if (router.isReady) {
         const filter = router.query.filter;
         const keyFilter = router.query.key;
         axios({
            method: 'get',
            url: `api/v1/blog/getblog?page=${router.query.page || 1}&key=${
               router.query.key || state.keyFilter
            }&filter=${router.query.filter || state.filter}`,
         })
            .then((res) => {
               let data = res.data;

               dispatch({
                  type: 'Done',
                  payload: { keyFilter, filter, posts: data },
               });
            })
            .catch((e) => {
               dispatch({
                  type: 'Done',
                  payload: { keyFilter, filter, posts: [] },
               });
            });
      }
      return () => {
         router.events.off('routeChangeStart', handleRouterChange);
      };
   }, [router]);
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
               content={`http://103.161.172.66/external/tee.jpg`}
            ></meta>
            <meta property="og:title" content="Blog của Tee | Hành trình tâm linh | Thiền | Chiêm nghiệm về cuộc sống "></meta>
            <title>Tee Blog</title>
         </Head>
         <MainContentLayout>
            <LargeContentLayout>
               <SearchBar
                  defaultValue={state.keyFilter}
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
               hrefToQuerry={'/blog?page='}
               page={parseInt(router.query.page as string) || 1}
            ></Pagination>
         </MainContentLayout>
      </>
   );
}

export default Page;
