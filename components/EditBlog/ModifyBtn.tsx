import { ReactElement, useEffect } from "react";
import Style from "../../styles/components/EditBlog/ModifyBtn.module.sass"
export default function ModifyBtn():ReactElement{
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (<>
        <div id={Style.ModifyBtn} className="btn-group">
            <button id={Style.Btn} className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Modify post
            </button>
            <ul style={{"paddingTop": 0}} className="dropdown-menu dropdown-menu-dark">
                <li  id={Style.ActionBtn}><span className="dropdown-item disabled">Actions</span></li>
                <hr style={{"margin":"0"}}></hr>
                <li id={Style.EditBtn}><a className="dropdown-item" href="#">&#9998;  Edit</a></li>
                <li id={Style.RemoveBtn}><a className="dropdown-item" href="#">&#10007; Remove</a></li>
            </ul>
        </div>
    </>)
}