import React,{ forwardRef, LegacyRef, ReactElement, useRef } from "react";
const ReactQuill = dynamic(
 async () => {
  const {default : RQ} = await import("react-quill")
  return function displayName({forwardedRef, ...props}:{forwardedRef:any,id : any, modules: any, placeholder: any}){
     return <RQ ref={forwardedRef} {...props}></RQ>
    }
},
   { ssr: false });
import Style from "../../styles/components/BlogEditor/ContentEditor.module.sass"
import dynamic from "next/dynamic";
interface Props {
  ref: LegacyRef<typeof ReactQuill>
}


export default function ContentEditor({ref}:Props):ReactElement{

    return (<>
        <ReactQuill forwardedRef={ref} id={Style.ContentEditor} modules={modules} placeholder="Write your blog"></ReactQuill>
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