import React,{ forwardRef, LegacyRef, ReactElement, useEffect, useRef } from "react";
import Style from "../../styles/components/BlogEditor/ContentEditor.module.sass"
import dynamic from "next/dynamic";
import Module from "./Module";
import axios from "axios"
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
  console.log(ReactQuill)
 
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
  toolbar: {
    container : Module.toolbarOptions,
    handlers: {
    "image" : async function (){
      const editor = this
      console.log("editopr", editor)
      let input = document.createElement("input")
      input.setAttribute('type', 'file');  
      input.setAttribute('accept', 'image/*');
      input.setAttribute('name','upload-name')  
      input.click()
      input.onchange = async ()=>{
          console.log(input)
          console.log(input.files)
          let formData:any = new FormData()
          formData.append("upload-name",input.files?.[0],"upload-name");
          console.log(formData)
          axios({
              method: 'post',
              url:"/api/post/image",
              headers: {
                  'Content-Type': '"multipart/form-data"'
              },
              data: formData
          }).then((res)=>{
              console.log(res.data)
          }).catch((e)=>{
              console.log(e)
          })
         
      }
    }
  }
}
}