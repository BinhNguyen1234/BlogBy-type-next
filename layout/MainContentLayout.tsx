import { ReactElement } from "react";
interface Props {
    children: ReactElement | ReactElement[]
}
import Style from "../styles/Layouts/MainContentLayout.module.sass"
export default function MainContentLayout ({children}:Props):ReactElement{
    return (
        <>
            <div id={Style.MainContentLayout}>
            <div>
                {children}
            </div>
        </div>
        </>
    )
}