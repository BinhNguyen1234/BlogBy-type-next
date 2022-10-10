import { ReactElement } from "react"
import MainContentLayout from "../../layout/MainContentLayout"
export async function getStaticProps(){
    return {props :{
        data: "nguyen vu binh"
    }}
}
import PreviewBlogContainer from "../../components/PreviewBlog/PreviewBlogContainer"
import PreviewBlogChild from "../../components/PreviewBlog/PreviewBlogChild"
interface AboutMeProps {
    data: string
}
function AboutMe({data}:AboutMeProps):ReactElement{
    return (
        <>
        <MainContentLayout>
            <PreviewBlogContainer>
                <PreviewBlogChild></PreviewBlogChild>
                <PreviewBlogChild></PreviewBlogChild>
                <PreviewBlogChild></PreviewBlogChild>
            </PreviewBlogContainer>
        </MainContentLayout>
        </>
    )
}


export default AboutMe