import {
   ReactElement,
   useRef,
   useCallback,
   useState,
   useLayoutEffect,
} from 'react';
import ContentEditor from './ContentEditor';
import TitleEditor from './TitleEditor';
import SendBlogBtn from './SendBlogBtn';
import PostThumbnailSelect from './PostThumbnailSelect';
import Style from '../../styles/components/BlogEditor/BlogEditor.module.sass';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { handleSendPostBtn } from '../../feature/login/UISendPostBtn';
import { RootStateType } from '../../feature';
import PreviewBlogChild from '../PreviewBlog/PreviewBlogChild';
import { useRouter } from 'next/router';
import { debounceChangeTitle } from '../../ulitlity/debounce';
const initialState = {
   title: null,
   contentString: null,
   date: null,
   imgThumbnail: null,
};
interface Props {
   href: string;
   value?: {
      title: string;
      content: any;
      imgThumbnail: string;
   } | null;
}
export default function BlogEditor({ value, href }: Props): ReactElement {
   const router = useRouter();
   const [title, setTitle] = useState('title');
   const [contentString, setContentString] = useState();
   const [imgThumbnail, setUrl] = useState(value?.imgThumbnail || null);
   const refState = useRef({ contentString, imgThumbnail });
   refState.current = { contentString, imgThumbnail };
   const handleUiSendBtn = useCallback(() => {
      if (statusBtn != 'TRY AGAIN') {
         sendNewPost();
      } else {
         dispatch(handleSendPostBtn({ type: 'INITIAL' }));
      }
   }, []);
   const titleEditorRef = useRef<HTMLTextAreaElement>(null);
   const contentEditorRef = useRef<ReactQuill>(null);
   const dispatch = useDispatch();
   const statusBtn = useSelector((state: RootStateType) => {
      return state?.UISendPostBtn.content;
   });
   const sendNewPost = useCallback(() => {
      dispatch(handleSendPostBtn({ type: 'WAITTING' }));
      const editor = contentEditorRef.current?.getEditor();
      axios({
         method: 'post',
         url: href,

         data: {
            title: titleEditorRef.current?.value,
            content: editor?.getContents().ops,
            contentString: refState.current.contentString,
            imgThumbnail: refState.current.imgThumbnail,
         },
      })
         .then((res) => {
            dispatch(handleSendPostBtn({ type: 'SUCCESS' }));
            editor?.enable(false);
            editor?.blur();
            setTimeout(() => {
               router.push(`/blog/${res.data.url}`);
               dispatch(handleSendPostBtn({ type: 'INITIAL' }));
            }, 1000);
         })
         .catch((err) => {
            dispatch(
               handleSendPostBtn({
                  type: 'FAILED',
                  message: `${err.response.status}: ${err.response.data}`,
               })
            );
         });
   }, []);
   useLayoutEffect(() => {
      titleEditorRef.current?.addEventListener(
         'input',
         debounceChangeTitle(setTitle, 2000)
      );
   }, []);
   return (
      <>
         <form id={Style.Editor}>
            <TitleEditor
               customref={titleEditorRef}
               form={Style.Editor.toString()}
            >
               {value?.title}
            </TitleEditor>
            <ContentEditor
               onChange={setContentString}
               content={value?.content}
               setDefaultPreviewUrl={setUrl}
               ref={contentEditorRef}
            ></ContentEditor>
            <PostThumbnailSelect onChange={setUrl}></PostThumbnailSelect>
            <PreviewBlogChild
               style={{ justifySelf: 'flex-start', margin: '2rem 0 0 0' }}
            >
               {{
                  data: {
                     title: [, , title || value?.title || 'title'],
                     contentString: [, , contentString || 'content'],
                     imgThumbnail: imgThumbnail || value?.imgThumbnail,
                     date: new Date().toLocaleDateString(['ban', 'id']),
                  },
               }}
            </PreviewBlogChild>
            <SendBlogBtn onClick={handleUiSendBtn}></SendBlogBtn>
         </form>
      </>
   );
}
