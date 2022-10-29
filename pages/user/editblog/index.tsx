import { ReactElement, useEffect, useState } from "react";
import EditBlog from "../../../components/EditBlog";
import LargeContentLayout from "../../../layout/LargeContentLayout";
import SearchBar from "../../../components/SearchBar";
import Pagination from "../../../components/Pagination";
import LoadMore from "../../../components/LoadMore";
const simulatorData = [
    {
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
export default function EditBlogPage():ReactElement{
    
    const [stage,setStage] = useState(simulatorData)
    return (<>
        {console.log(LargeContentLayout)}
        <LargeContentLayout>
            <SearchBar filter={{fields:["title","content"]}}></SearchBar>
            <hr></hr>
            <EditBlog data={stage}></EditBlog>
            <Pagination page={1} hrefToQuerry={"test"}></Pagination>
        </LargeContentLayout>
    </>)
}