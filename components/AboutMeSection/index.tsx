import { ReactElement } from "react";
import Style from "../../styles/components/AboutMeSection/AboutMeSection.module.sass"
import LeftContent from "./LeftContent";
import RightImage from "./RightImage";
export default function AboutMeSection():ReactElement{
    return <>
        <div id={Style.Container}>
            <LeftContent></LeftContent>
            <RightImage></RightImage>
        </div>
    </>
}