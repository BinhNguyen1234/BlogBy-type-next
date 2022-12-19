import { ReactElement } from "react";
import Style from "../../styles/components/AboutMeSection/LeftContent.module.sass"
export default function LeftContent():ReactElement{
    return <>
        <div id={Style.LeftContent}>
            <div>Hello, Tee here...</div>
            <div>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <button type="button" className="btn btn-primary">Read more</button>
        </div>
    </>
}