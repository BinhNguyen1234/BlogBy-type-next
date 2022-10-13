import { ReactElement } from "react"
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
    const data = [
        {
            previewImgUrl : "test",
            previewTitle: "titletest1",
            previewContent: "content test1",
            previewDate: "10/2/1005"
        },{
            previewImgUrl : "test2",
            previewTitle: "titletest12",
            previewContent: "content test12",
            previewDate: "10/2/10052"
        }
    ];
    return (
        <>
        <MainContentLayout>
            <PreviewBlogContainer>
                {{data}}
            </PreviewBlogContainer>
          
        </MainContentLayout>
        </>
    )
}


export default Blog