import {ReactElement} from "react"
import { useRouter } from "next/router"
import { type } from "os"
export async function getServerSideProps(context:any){
    const title = context.params.slug
    return {props:{
        slug : title
    }}
}
type Props = ReturnType<typeof getServerSideProps>
export default function Post({slug}:{slug:string}):ReactElement {
    const router = useRouter()
    
    return (<>
    <div>
        {slug}
    </div>
    </>)
}