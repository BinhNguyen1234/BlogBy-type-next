import React,{ forwardRef, LegacyRef, ReactElement, useRef } from "react";
import Style from "../../styles/components/BlogEditor/ContentEditor.module.sass"
import dynamic from "next/dynamic";


const ReactQuill = dynamic(
 async () => {
  const {default: RQ} = await import("react-quill")
  return function displayName({forwardedRef, ...props}:{forwardedRef:any,id : any, modules: any, placeholder: any}){
     return <RQ ref={forwardedRef} {...props}></RQ>
    }
},
   { ssr: false });

interface Props {
  ref: LegacyRef<typeof ReactQuill> 
}

const ContentEditor = forwardRef(function displayName(props, ref):ReactElement{

  return (<>
      <ReactQuill forwardedRef={ref} id={Style.ContentEditor} modules={modules} placeholder="Write your blog"></ReactQuill>
  </>)
})
export default ContentEditor
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

