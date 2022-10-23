import { ReactElement } from "react";
import Style from "../../styles/components/post/BackPostBtn.module.sass"
import {Router, useRouter} from "next/router"
interface Props {
    children: string
}

export default function BackPostBtn({children}:Props): ReactElement {
    const router = useRouter()
    const handleBackward = function(){
        if(window){
            router.back()
        }else{
            router.push("/blog?page=1")
        }
    }
        
    
    return (
        <>
            <div onClick={handleBackward} id={Style.BackPostBtn}>
                <span>&larr;</span>
                <div>{children}</div>
            </div>
        
        </>
    )
}