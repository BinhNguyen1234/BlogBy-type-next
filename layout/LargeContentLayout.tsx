import { ReactElement } from "react";
import Style from "../styles/Layouts/LargeContent.module.sass"
interface Props {
    children: ReactElement[] | ReactElement
}

export default function LargeContentLayout({children}:Props):ReactElement {
    return (<>
        <div id={Style.LargeContent}>
            <div>
                {children}
            </div>
        </div>
    </>)
}