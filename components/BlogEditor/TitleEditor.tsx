import { HtmlHTMLAttributes, LegacyRef, ReactElement } from "react";
import Style from "../../styles/components/BlogEditor/TitleEditor.module.sass"
interface Props {
    form:string,
    ref: LegacyRef<HTMLTextAreaElement>
}
export default function TitleEditor({form,ref}:Props):ReactElement{
    return (<>
        <textarea ref={ref} form={form} id={Style.TitleEditor}  placeholder="Title"></textarea>
    </>)
}