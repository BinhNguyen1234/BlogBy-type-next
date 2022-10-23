import { ReactElement, useEffect, useState } from "react"

import axios from "axios"
import MainContentLayout from "../../layout/MainContentLayout"
import { useRouter } from "next/router"
import PreviewBlogContainer from "../../components/PreviewBlog/PreviewBlogContainer"
import Pagination from "../../components/Pagination"
const blog = require("../../Server/Model/post")
export async function getServerSideProps({req}:any){
    let params = req.query.page;
    
    let data = await blog.aggregate().match({}).project({"title":1,"date":1, "imgThumbnail":1,"url": 1,"contentString":1, "_id": 0 }).skip((params?params-1:0)*8).limit(8)
        return {props:{
        params,
        data: data.map((object:any)=>{return {...object, date: object.date.toLocaleDateString(['ban', 'id'])}})
        }}
    
}
function Page({params,data}:any):ReactElement{
    const router = useRouter()
    useEffect(()=>{
        if(!params){
            router.push("/blog?page=1")
        }
    },[])
    let [current,setCurrent] = useState(parseInt(params||1))
    return (
        <>
        <MainContentLayout>
            <PreviewBlogContainer className={!data?"--skeleton": ""}>
                {data}
            </PreviewBlogContainer>
        <Pagination page={current} changePage={setCurrent}></Pagination>
        </MainContentLayout>
        
        </>
    )
}


export default Page