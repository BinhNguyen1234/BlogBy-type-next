import { ReactElement } from "react";

import Style from "../styles/components/User/UserMenu.module.sass"

function MenuUser():ReactElement {
    return (
        <>
            <ul id={Style.UserMenu}>
                <li>Write Blog</li>
                <li>Edit Blog</li>
                <li>Log Out</li>
            </ul>
        </>
    )
}
export default MenuUser;