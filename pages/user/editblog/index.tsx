import { ReactElement, useEffect, useReducer, useState } from 'react';
import EditBlog from '../../../components/EditBlog';
import LargeContentLayout from '../../../layout/LargeContentLayout';
import SearchBar from '../../../components/SearchBar';
import Pagination from '../../../components/Pagination';
import { RootStateType } from '../../../feature';
import axios from 'axios';
import { DataType } from '../../../components/EditBlog';
import { useSelector } from 'react-redux';
interface InitialStateType {
   data: Array<DataType>;
   isLoading: boolean;
   displayedData: Array<DataType>;
   keyFilter: string;
}

function reducer(state: InitialStateType, action: any) {
   switch (action.type) {
      case 'Done':
         return {
            ...state,
            data: action.payload.posts,
            displayedData: action.payload.posts.reduce(
               (pV: Array<DataType>, cV: DataType) => {
                  let positonSearchWord = (cV.title as string).search(
                     new RegExp(`${state.keyFilter}(.*)`, 'miu')
                  );
                  let headAndTrail = (cV.title as string).split(
                     new RegExp(`${state.keyFilter}(.*)`, 'miu'),2
                  );
                  let body = cV.title.slice(
                     positonSearchWord,
                     positonSearchWord + state.keyFilter.length
                  );
                  headAndTrail.splice(1, 0, body as string);
                  if (positonSearchWord >= 0) {
                     pV.push({ ...cV, title: headAndTrail });
                  }
                  return pV;
                  // return (
                  //    data.title.search(new RegExp(`${state.keyFilter}`, 'gmiu')) >=
                  //    0
                  // );
               },
               []
            ),
            isLoading: false,
         };
      case 'Sent':
         return { ...state, isLoading: true };
      case 'Filter':
         return {
            ...state,
            isLoading: false,
            displayedData: (() => {
               return state.data.reduce((pV: any, cV) => {
                  let positonSearchWord = (cV.title as string).search(
                     new RegExp(`${action.payload.keyFilter}(.*)`, 'miu')
                  );
                  let headAndTrail = (cV.title as string).split(
                     new RegExp(`${action.payload.keyFilter}(.*)`, 'miu'),2
                  );
                  let body = cV.title.slice(
                     positonSearchWord,
                     positonSearchWord + action.payload.keyFilter.length
                  );
                  headAndTrail.splice(1, 0, body as string);
                  if (positonSearchWord >= 0) {
                     pV.push({ ...cV, title: headAndTrail });
                  }
                  return pV;
                  // return (
                  //    data.title.search(
                  //       new RegExp(`${action.payload.keyFilter}`, 'miu')
                  //    ) >= 0
                  // );
               }, []);
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
         title: [[],[],'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: [[],[],'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
      {
         title: [[],[],'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: [[],[],'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
      {
         title: [[],[],'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: [[],[],'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
      {
         title: [[],[],'this is simulate title number 1'],
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: [[],[],'this is simulate title number 2'],
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
   ];
   const isAuth = useSelector((state: RootStateType) => {
      return state.loginSliceReducers.isAuth;
   });
   const [state, dispatch] = useReducer(reducer, {
      data: defaultData,
      isLoading: true,
      displayedData: defaultData,
      keyFilter: '',
   });
   const [page, setPage] = useState(1);
   const setPageAndUi = (page: number) => {
      dispatch({ type: 'Sent' });
      setPage(page);
   };
   useEffect(() => {
      axios({
         method: 'get',
         url: `/api/v1/user/editblog?page=${page}&key=${state.keyFilter}`,
      }).then((res) => {
         let data = res.data.map((object: any) => {
            return {
               ...object,
               date: new Date(object.date).toLocaleDateString(['ban', 'id']),
            };
         });
         console.log(data)
         dispatch({ type: 'Done', payload: { posts: data } });
      })
      .catch((e)=>{console.log(e)})
      ;
   }, [page]);
   if (isAuth === true) {
      return (
         <>
            <LargeContentLayout>
               <SearchBar
                  href={`/api/v1/user/editblog?page=${page}&key=${state.keyFilter}`}
                  onInput={dispatch}
                  filter={{ fields: ['title', 'content'] }}
               ></SearchBar>
               <hr></hr>
               <EditBlog
                  isLoading={state.isLoading}
                  displayedData={state.displayedData}
               ></EditBlog>
               <Pagination page={page} setPage={setPageAndUi}></Pagination>
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
