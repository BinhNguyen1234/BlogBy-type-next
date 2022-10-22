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
    },{"title":1, "content": 1})
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
        title: data.title,
        content: data.content
    }}
    
}
type Props = Awaited<ReturnType<typeof getServerSideProps>>
export default function Post({title, content}: any):ReactElement {
    const router = useRouter()
    
    return (<>
        <Head>
            <title>{title}</title>
        </Head>
        <LargeContentLayout>
            <BackPostBtn>{title}</BackPostBtn>
            <h2>{title}</h2>
            <DecodeDelta>{content}</DecodeDelta>
        </LargeContentLayout>
    </>)

    
}