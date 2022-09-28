import dynamic from "next/dynamic";
import { ReactElement } from "react";
import Style from "../../styles/components/post/DecodeDelta.module.sass"
const ReactQuill = dynamic( async()=>{
    const {default: RQ} = await import("react-quill")
    return function RQComponent({forwardedRef, id,value,modules,readOnly}:{id:any,forwardedRef?: any, modules?: any, value: any,readOnly: any}):ReactElement{
        return (
            <>
                <RQ ref={forwardedRef} id={id} value={value} modules={modules} readOnly={readOnly}></RQ>
            </>
        )
    }
}, {ssr: false})
let toolbar = false
export default function DecodeDelta ({children}:{children:any}) :ReactElement{
    return (<>
        <ReactQuill id={Style.DecodeDelta} modules={{toolbar}}  readOnly={true} value={children} ></ReactQuill>
    </>)
}