import { ReactElement } from "react";
import WriteBlog from "./WriteBlog";
import Style from "../styles/components/User/UserMenu.module.sass"

function MenuUser():ReactElement {
    return (
        <>
            <ul id={Style.UserMenu}>
                <li>
                    <WriteBlog></WriteBlog>
                </li>
                <li>Edit Blog</li>
                <li>Change Password</li>
                <li>Log Out</li>
            </ul>
        </>
    )
}
export default MenuUser;