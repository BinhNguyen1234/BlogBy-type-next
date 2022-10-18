import { ReactElement } from "react";
import WriteBlogBtn from "./WriteBlogBtn";
import Style from "../../styles/components/User/UserMenu.module.sass"
import LogOutBtn from "./LogOutBtn";
function MenuUser():ReactElement {
    return (
        <>
            <ul id={Style.UserMenu}>
                <li>
                    <WriteBlogBtn></WriteBlogBtn>
                </li>
                <li>Edit Blog</li>
                <li>Change Password</li>
                <li>
                    <LogOutBtn></LogOutBtn>
                </li>
            </ul>
        </>
    )
}
export default MenuUser;