import { ReactElement, useEffect, useState } from "react"
import axios from "axios"
import MainContentLayout from "../../layout/MainContentLayout"
import { useRouter } from "next/router"
import PreviewBlogContainer from "../../components/PreviewBlog/PreviewBlogContainer"
import Pagination from "../../components/Pagination"
const blog = require("../../Server/Model/post")
export async function getServerSideProps({req}:any){
    try {
    // let data = await blog.find().limit(8).projection({"date":1,"url":1,"contentString":1,"title":1,"imgThumbnail":1})
    let data = await blog.aggregate().match({}).project({"title":1,"date":1, "imgThumbnail":1,"contentString":1, "_id": 0 }).limit(8)
    console.log(data.length)
        return {props:{
        params: req.query.page,
        data
        }}}
    catch(e){
        console.log(e)
    }
    
}
function Blog({params,data}:any):ReactElement{
    const router:any = useRouter()
    let [current,setCurrent] = useState(parseInt(params))
    return (
        <>
        <MainContentLayout>
            <PreviewBlogContainer className={!data?"--skeleton": ""}>
                {data}
            </PreviewBlogContainer>
        <Pagination page={current} changePage={setCurrent}></Pagination>
        </MainContentLayout>:
        
        </>
    )
}


export default Blog