import  { memo,ReactElement } from "react";
import { useSelector } from "react-redux";
import Style from "../../styles/components/BlogEditor/Message.module.sass"
export default memo(function Message({children}:{children:string}):ReactElement{
    const message = useSelector((state)=>{return })
    return (
        <span id={Style.Message}>
            {children}
        </span>
    )
})