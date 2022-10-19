import React,{ memo,forwardRef, LegacyRef, ReactElement, useEffect, useRef } from "react";
import Style from "../../styles/components/BlogEditor/ContentEditor.module.sass"
import dynamic from "next/dynamic";
import axios from "axios"

const ReactQuill = dynamic(
  async () => {
    const {default: RQ} = await import("react-quill")
    
    
      return function displayName({forwardedRef,onChange ,...props}:{forwardedRef:any,id : any, onChange: any,modules: any, placeholder: any}){
        return <RQ onChange={(a,b,c,e)=>{onChange(e.getText())}} ref={forwardedRef} {...props}></RQ>
      }
  },
  {
    ssr: false,
    loading : ()=>{
      return (
        <div className="spinner-border" style={{"width": "3rem", "height": "3rem", alignSelf:"center"}} role="status">

        </div>
      )
    }
  }   
);

interface Props {
  onChange: any,
  setDefaultPreviewUrl: any
}

const ContentEditor = forwardRef(function useDisplayName(props:Props,ref):ReactElement{
  console.log("onchange", props.onChange)
  let toolbarOptions = useRef([
    ['bold', 'italic', 'underline'], 
    ['link', 'image'],
    [ {"size" : ["normal", 'large', 'huge' ]}],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    [{ 'header': [ 2, 3, 4, 5, 6, false] }],
    ['clean'] 
    ]);
  const modules = useRef({
    toolbar: {
      container : toolbarOptions.current,
      handlers: {
      "image" : async function (){
        const edit:any = this;
        const editor = edit.quill
        const range = editor.getSelection()
        let input = document.createElement("input")
        input.setAttribute('type', 'file');  
        input.setAttribute('accept', 'image/*');
        input.setAttribute('name','upload-name')  
        input.click()
        input.onchange = async ()=>{
            let formData:any = new FormData()
            formData.append("upload-name",input.files?.[0],"upload-name");
            console.log(range)
            axios({
                method: 'post',
                url:"/api/post/image",
                headers: {
                    'Content-Type': '"multipart/form-data"'
                },
                data: formData
            }).then((res)=>{
                console.log(range)
                editor.insertEmbed(range.index,'image',`/external/${res.data}`)
                editor.setSelection(range.index++)
                console.log(range)
                props.setDefaultPreviewUrl(`/external/${res.data}`)
            }).catch((e)=>{
                console.log(e)
            })
           
        }
      }
    }
  }
  }
  )
  console.log("render content")
  return (<>
      <ReactQuill onChange={props.onChange} forwardedRef={ref} id={Style.ContentEditor} modules={modules.current} placeholder="Write your blog"></ReactQuill>
  </>)
})
export default memo(ContentEditor)


