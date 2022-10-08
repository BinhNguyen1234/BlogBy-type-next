import { ReactElement } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogContainer.module.sass"
interface Props {
    children: ReactElement | ReactElement[]
}
 export default function PreviewBlogContainer({children}:Props):ReactElement{
    return (<>
        <div id={Style.PreviewBlogContainer} >{children}</div>
    </>)
 }