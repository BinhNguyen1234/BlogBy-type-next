import { ReactElement, useEffect, useState } from "react"
import axios from "axios"
import MainContentLayout from "../../layout/MainContentLayout"
export async function getStaticProps(){
    return {props :{
        data: "nguyen vu binh"
    }}
}
import PreviewBlogContainer from "../../components/PreviewBlog/PreviewBlogContainer"
import PreviewBlogChild from "../../components/PreviewBlog/PreviewBlogChild"
import Pagination from "../../components/Pagination"
function Blog():ReactElement{
    // const data = [
    //     {
    //         previewImgUrl : "test",
    //         previewTitle: "titletest1",
    //         previewContent: "content test1",
    //         previewDate: "10/2/1005"
    //     },{
    //         previewImgUrl : "test2",
    //         previewTitle: "titletest12",
    //         previewContent: "content test12",
    //         previewDate: "10/2/10052"
    //     }
    // ];
    let [nextData, setNextData]= useState(null)
    let [data, setData] = useState(null)
    useEffect(()=>{
        axios({
            method: "get",
            url: "/fakeapi"
        })
        .then((res=>{
            setData(res.data)
            console.log(res.data)
        }))
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <><MainContentLayout>
            <PreviewBlogContainer className={!data?"--skeleton": ""}>
                {{data}} 
            </PreviewBlogContainer>
          
        </MainContentLayout>:
        
        </>
    )
}


export default Blog