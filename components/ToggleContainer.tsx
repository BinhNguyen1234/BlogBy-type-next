import React from "react"
import ToggleBtn from "./ToggleBtn"
import style from "../styles/components/ToggleContainer.module.sass"

interface Props {
    children:JSX.Element,
    refProp: React.RefObject<HTMLDivElement>
}


const ToggleContainer:React.FC<Props> =({children, refProp})=>{
    return <>
    <div ref={refProp} id={style.ToggleContainer}>
        {children}
    </div>
    </>
}

export default ToggleContainer