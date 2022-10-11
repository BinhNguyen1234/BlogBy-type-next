import { memo, LegacyRef, forwardRef } from "react";
import Style from "../../styles/components/BlogEditor/TitleEditor.module.sass"
interface Props {
    form:string,
    onChange: any
}
const TitleEditor = forwardRef(function displayName(props:Props,ref:LegacyRef<HTMLTextAreaElement>){
    return (<>
        <textarea onChange={(e)=>{props.onChange(e.target.value)}} ref={ref} form={props.form} id={Style.TitleEditor}  placeholder="Title"></textarea>
    </>)
})
export default  memo(TitleEditor)