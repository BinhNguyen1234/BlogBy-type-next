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
   keyFilter: string | null
}

function reducer(state: InitialStateType, action: any) {
   switch (action.type) {
      case 'Done':
         return { 
            ...state, 
            data: action.payload.posts, 
            displayedData: action.payload.posts.filter((data: DataType)=>{
               return (
                  data.title.search(new RegExp(`${state.keyFilter}`, 'gmiu')) >= 0
               );
            }),
            isLoading: false};
      case 'Sent':
         return { ...state, isLoading: true };
      case 'Filter': 
         return {
            ...state, 
            isLoading: false, 
            displayedData: (()=>{
               return state.data.filter((data: DataType) => {
                  return (
                     data.title.search(new RegExp(`${action.payload.keyFilter}`, 'gmiu')) >= 0
                  );
               })
            })(), 
            keyFilter: action.payload.keyFilter
         }
      default:
         throw new Error();
   }
}
//-----invoked
export default function EditBlogPage(): ReactElement {
   const defaultData = [
      {
         title: 'this is simulate title number 1',
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: 'this is simulate title number 2',
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
      {
         title: 'this is simulate title number 1',
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: 'this is simulate title number 2',
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
      {
         title: 'this is simulate title number 1',
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: 'this is simulate title number 2',
         url: 'simulate-url-2',
         date: '20/12/2020',
      },
      {
         title: 'this is simulate title number 1',
         url: 'simulate-url-1',
         date: '10/10/2020',
      },
      {
         title: 'this is simulate title number 2',
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
      keyFilter: ""
   });
   const [page, setPage] = useState(1);
   const setPageAndUi = (page: number) => {
      dispatch({ type: 'Sent' });
      setPage(page);
   };
   console.log('render')
   useEffect(() => {
      console.log('useEffect');
      axios({
         method: 'get',
         url: `/api/v1/user/editblog?page=${page}`,
      }).then((res) => {
         let data = res.data.map((object: any) => {
            return {
               ...object,
               date: new Date(object.date).toLocaleDateString(['ban', 'id']),
            };
         });
         dispatch({ type: 'Done', payload: { posts: data } });
      });
   }, [page]);
   if (isAuth === true) {
      return (
         <>
            <LargeContentLayout>
               <SearchBar
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
