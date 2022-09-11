import { ReactElement } from "react";
import Style from "../styles/Layouts/MiddleContent.module.sass"
interface Props {
    children: ReactElement
}
export default function MiddleContentLayout({children}: Props):ReactElement{
    return (<>
        <div id={Style.MiddleContent}>
            {children}
        </div>
    </>)
}