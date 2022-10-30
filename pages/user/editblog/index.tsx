import { ReactElement, useLayoutEffect, useReducer} from "react";
import EditBlog from "../../../components/EditBlog";
import LargeContentLayout from "../../../layout/LargeContentLayout";
import SearchBar from "../../../components/SearchBar";
import Pagination from "../../../components/Pagination";
import axios from "axios";
import {DataType} from "../../../components/EditBlog"
interface InitialStateType {
    data: Array<DataType>,
    isLoading: boolean
}


function reducer(state:InitialStateType, action:any) {
  switch (action.type) {
    case 'Done':
      return { data : action.payload, isLoading:false};
    case 'Sent':
      return { data : action.payload, isLoading: true};
    default:
      throw new Error();
  }
}
export default function EditBlogPage():ReactElement{
    const defaultData = [
        {
            title: "this is simulate title number 1",
            url: "simulate-url-1",
            date: "10/10/2020"
        },
        {
            title: "this is simulate title number 2",
            url: "simulate-url-2",
            date: "20/12/2020"
        },
        {
            title: "this is simulate title number 1",
            url: "simulate-url-1",
            date: "10/10/2020"
        },
        {
            title: "this is simulate title number 2",
            url: "simulate-url-2",
            date: "20/12/2020"
        },
        {
            title: "this is simulate title number 1",
            url: "simulate-url-1",
            date: "10/10/2020"
        },
        {
            title: "this is simulate title number 2",
            url: "simulate-url-2",
            date: "20/12/2020"
        },{
            title: "this is simulate title number 1",
            url: "simulate-url-1",
            date: "10/10/2020"
        },
        {
            title: "this is simulate title number 2",
            url: "simulate-url-2",
            date: "20/12/2020"
        }
    ]
    useLayoutEffect(()=>{
        axios({
            method: "get",
            url: "/api/v1/user/editblog"
        })
        .then((res)=>{
            let data = res.data.map((object:any)=>{
                return {...object, date: new Date(object.date).toLocaleDateString(['ban', 'id'])}
            })
            dispatch({type: "Done", payload: data})
          
        })    
    },[])
    const [state,dispatch] = useReducer(reducer,{data: defaultData, isLoading: true})
    
    return (<>
        <LargeContentLayout>
            <SearchBar filter={{fields:["title","content"]}}></SearchBar>
            <hr></hr>
            <EditBlog data={state}></EditBlog>
            <Pagination page={1} hrefToQuerry={"test"}></Pagination>
        </LargeContentLayout>
    </>)
}