import dynamic from "next/dynamic";
import { ReactElement } from "react";
import Style from "../../styles/components/BlogEditor/ContentEditor.module.sass"
const ReactQuill = dynamic( async()=>{
    const {default: RQ} = await import("react-quill")
    return function RQComponent({forwardedRef, value,theme,readOnly}:{forwardedRef?: any, theme: any, value: any,readOnly: any}):ReactElement{
        return (
            <>
                <RQ ref={forwardedRef} value={value} theme={theme} readOnly={readOnly}></RQ>
            </>
        )
    }
}, {ssr: false})
let toolbar = [
    []
]
export default function DecodeDelta ({children}:{children:any}) :ReactElement{
    return (<>
        <ReactQuill  readOnly={true} value={children} theme="bubble"></ReactQuill>
    </>)
}