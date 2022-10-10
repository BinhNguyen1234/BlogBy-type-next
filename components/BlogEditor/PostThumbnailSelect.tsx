import { ReactElement, useCallback, useRef } from "react";
import Style from "../../styles/components/BlogEditor/PostThumbnailSelect.module.sass"
import axios from "axios"
export default function PostThumbnailSelect ():ReactElement {
    const inputRef:any= useRef<HTMLInputElement>(null)
    const formRef:any = useRef<HTMLFormElement|undefined>()
    const handleImageThumbnail = useCallback(()=>{
        let formData = new FormData(formRef.current)
        axios({
            method: "post",
            url:"/api/post/image",
            headers: {
                'Content-Type': '"multipart/form-data"'
            },
            data: formData
        }).then((res=>{
            console.log(res)
        }))
        .catch((e=>{
            console.log(e)
        }))
    },[])
    return (
        <>
            <form ref={formRef} id={Style.PostThumbnailSelect}>
                <label htmlFor="inputThumbail">Chose image for thumbnail</label>
                <input ref={inputRef} name="upload-name" form={Style.PostThumbnailSelect} onChange={handleImageThumbnail} id="inputThumbail" type="file" accept="image/*" ></input>
            </form>
        </>
    )
}