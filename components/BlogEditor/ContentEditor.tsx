import { ReactElement } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Style from "../../styles/components/BlogEditor/ContentEditor.module.sass"
import dynamic from "next/dynamic";



export default function ContentEditor():ReactElement{
    return (<>
        <ReactQuill id={Style.ContentEditor} modules={modules} placeholder="Write your blog"></ReactQuill>
    </>)
}
let toolbarOptions = [
  ['bold', 'italic', 'underline'], 
  ['link', 'image'],
  [ {"size" : [ 'small', "normal", 'large', 'huge' ]}],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  [{ 'header': [ 2, 3, 4, 5, 6, false] }],
  ['clean'] 
  ];
const modules = {
  toolbar: toolbarOptions
}