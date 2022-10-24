import {ReactElement} from "react"
import { useRouter } from "next/router"
import LargeContentLayout from "../../../layout/LargeContentLayout"
import DecodeDelta from "../../../components/Post/DecodeDelta"
import  BackPostBtn  from "../../../components/Post/BackPostBtn"

import Head from "next/head"

const blog = require("../../../Server/Model/post")
// import { type } from "os"

export async function getServerSideProps(context:any){
    const url = context.params.slug
    console.time("querry Post with title")
    const data = await blog.findOne({
        "url":url.toLowerCase()
    },{"title":1, "content": 1, "url":1, "imgThumbnail":1, "_id": 0})
    .then((blog:any)=>{
        return {
            imgThumbnail: blog.imgThumbnail,
            url: blog.url,
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
        imgThumbnail: data.imgThumbnail,
        url: data.url,
        title: data.title,
        content: data.content
    }}
    
}
type Props = Awaited<ReturnType<typeof getServerSideProps>>
export default function Post({title, content,imgThumbnail, url}: any):ReactElement {
    const router = useRouter()
    
    return (<>
        <Head>
            <meta property="og:locale" content="vi_VN"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content={`http://103.161.172.66/blog/post/${url}`}></meta>
            <meta name="description" content={`${title}`}></meta>
            <meta property="og:description" content={`${title}`}></meta>
            <meta property="og:image" content={`http://103.161.172.66${imgThumbnail}`}></meta>
            <meta property="og:title" content={`${title}`}></meta>
            <title>{title}</title>
        </Head>
        <LargeContentLayout>
            <BackPostBtn>{title}</BackPostBtn>
            <h2>{title}</h2>
            <DecodeDelta>{content}</DecodeDelta>
        </LargeContentLayout>
    </>)

    
}