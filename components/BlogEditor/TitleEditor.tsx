import { ReactElement } from "react";
import Style from "../../styles/components/BlogEditor/TitleEditor.module.sass"
export default function TitleEditor():ReactElement{
    return (<>
        <textarea id={Style.TitleEditor}  placeholder="Title"></textarea>
    </>)
}