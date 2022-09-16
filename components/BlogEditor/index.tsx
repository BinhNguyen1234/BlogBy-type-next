import { ReactElement } from "react"
import ContentEditor from "./ContentEditor"
import TitleEditor from "./TitleEditor"

export default function BlogEditor ():ReactElement{
    return (<>
        <form>
            <TitleEditor></TitleEditor>
            <ContentEditor></ContentEditor>
        </form>
    </>)
}