import {ReactElement} from "react"
import { useRouter } from "next/router"
import LargeContentLayout from "../../layout/LargeContentLayout"
import DecodeDelta from "../../components/Post/DecodeDelta"
import dynamic from "next/dynamic"
const ReactQuill = dynamic( async ()=>{
    return import('react-quill')
},{ssr:false}
)
const blog = require("../../Server/Model/post")
// import { type } from "os"

export async function getServerSideProps(context:any){
    const title = context.params.slug
    const data = await blog.findOne({
        "title":title
    })
    .then((blog:any)=>{
        console.log(blog)
        return {
            title: blog.title,
            content: blog.content
        }
    })
    .catch((e:Error)=>{
        console.log(e)
        return {error: "404"}
    })
    return {props:{
        data
    }}
    
}
type Props = Awaited<ReturnType<typeof getServerSideProps>>
export default function Post({data}: any):ReactElement {
    const router = useRouter()
    
    return (<>
    <LargeContentLayout>
        <DecodeDelta>{data.content}</DecodeDelta>

    </LargeContentLayout>
    
    </>)
}