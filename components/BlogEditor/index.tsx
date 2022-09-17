import { ReactElement } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"
import Style from "../../styles/components/BlogEditor/BlogEditor.module.sass"

export default function BlogEditor ():ReactElement{
    return (<>
        <form id={Style.Editor}>
            <TitleEditor></TitleEditor>
            <ContentEditor></ContentEditor>
        </form>
    </>)
}