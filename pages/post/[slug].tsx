import {ReactElement} from "react"
import { useRouter } from "next/router"
import LargeContentLayout from "../../layout/LargeContentLayout"
import DecodeDelta from "../../components/Post/DecodeDelta"
import dynamic from "next/dynamic"
const ReactQuill = dynamic( async ()=>{
    return import('react-quill')
},{
    ssr:false,
    loading : ()=>{
        return (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
      }
}
)
const blog = require("../../Server/Model/post")
// import { type } from "os"

export async function getServerSideProps(context:any){
    const url = context.params.slug
    console.time("querry Post with title")
    const data = await blog.findOne({
        "url":url.toLowerCase()
    })
    .then((blog:any)=>{
        return {
            title: blog.title,
            content: blog.content
        }
    })
    .catch((e:Error)=>{
        console.log(e)
        return {error: "404"}
    })
    console.timeEnd("querry Post with title")
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