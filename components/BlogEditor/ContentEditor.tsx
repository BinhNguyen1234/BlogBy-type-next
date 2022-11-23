import React, { memo, forwardRef, ReactElement, useRef } from 'react';
import Style from '../../styles/components/BlogEditor/ContentEditor.module.sass';
import dynamic from 'next/dynamic';
import APIAuth from '../../ulitlity/callApiWAuth';
import { debounceChangeContent } from '../../ulitlity/debounce';

const ReactQuill = dynamic(
   async function () {
      const Editor = await import('react-quill');
      let RQ = Editor.default;
      return function wrapRQ({
         forwardedRef,
         onChange,
         value,
         ...props
      }: {
         forwardedRef: any;
         id: any;
         onChange: any;
         modules: any;
         value: any;
         placeholder: any;
      }) {
         
         return (
            <>
              {console.log("wrapRQ render",value?true:false)}
               <RQ
                  value={value}
                  onChange={debounceChangeContent(onChange, 2000)}
                  ref={forwardedRef}
                  {...props}
               ></RQ>
            </>
         );
      };
   },
   {
      ssr: false,
      loading: () => {
         return (
            <div
               className="--skeleton"
               style={{ width: '100%', height: '100vh', alignSelf: 'center' }}
               role="status"
            ></div>
         );
      },
   }
);

interface Props {
   onChange?: any;
   setDefaultPreviewUrl?: any;
   content?: string;
}

const ContentEditor = forwardRef(function useWrapContentEditor(
   props: Props,
   ref
): ReactElement {
   let toolbarOptions = useRef([
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      [{ size: ['normal', 'large', 'huge'] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      [{ header: [2, 3, 4, 5, 6, false] }],
      ['clean'],
   ]);
   const API = new APIAuth();
   const modules = {
      toolbar: {
         container: toolbarOptions.current,
         handlers: {
            image: async function () {
               const edit: any = this;
               const editor = edit.quill;
               const range = editor.getSelection();
               let input = document.createElement('input');
               input.setAttribute('type', 'file');
               input.setAttribute('accept', 'image/*');
               input.setAttribute('name', 'upload-name');
               input.click();
               input.onchange = async () => {
                  let formData: any = new FormData();
                  formData.append(
                     'upload-name',
                     input.files?.[0],
                     'upload-name'
                  );
                  API.callAPI({
                     method: 'post',
                     url: '/api/v1//image/upload/blog',
                     headers: {
                        'Content-Type': '"multipart/form-data"',
                     },
                     data: formData,
                  })
                     .then((res) => {
                        editor.insertEmbed(
                           range.index,
                           'image',
                           `/external/${res.data}`
                        );
                        props.setDefaultPreviewUrl(`/external/${res.data}`);
                     })
                     .catch((e) => {
                        console.log(e);
                     });
               };
            },
         },
      },
   };

   return (
      <>
      {console.log("wrapContent render",props.content?true:false)}
         <ReactQuill
            value={props.content}
            onChange={props.onChange}
            forwardedRef={ref}
            id={Style.ContentEditor}
            modules={modules}
            placeholder="Write your blog"
         ></ReactQuill>
      </>
   );
});
export default memo(ContentEditor);
