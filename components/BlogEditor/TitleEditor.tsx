import { HtmlHTMLAttributes, LegacyRef, ReactElement, forwardRef } from "react";
import Style from "../../styles/components/BlogEditor/TitleEditor.module.sass"
interface Props {
    form:string
}
const TitleEditor = forwardRef(function displayName(props:Props, ref:LegacyRef<HTMLTextAreaElement>){
    return (<>
        <textarea ref={ref} form={props.form} id={Style.TitleEditor}  placeholder="Title"></textarea>
    </>)
})
export default  TitleEditor