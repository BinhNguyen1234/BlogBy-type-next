import { CSSProperties, ReactElement, useCallback } from 'react';
import Style from '../../styles/components/PreviewBlog/PreviewBlogChild.module.sass';

interface Props {
   alt?: string;
   children?:
      | {
           imgThumbnail?: string;
           title?: string;
           contentString?: string;
           date?: string;
        }
      | any;
   style?: CSSProperties;
   className?: string;
}
export default function PreviewBlogChild({
   children,
   style,
   className,
}: Props): ReactElement {
   return (
      <>
         <div
            style={style}
            className={Style.PreviewBlogChild + ` ${className}`}
         >
            <div className={Style.WindowBar}>
               <div></div>
               <div></div>
               <div></div>
            </div>
            <div className={Style.img_container}>
               <img
                  onError={({ currentTarget }) => {
                     currentTarget.onerror = null;
                     currentTarget.src = '/external/404-not-found-error.jpeg';
                  }}
                  src={`${
                     children?.data.imgThumbnail ||
                     '/external/404-not-found-error.jpeg'
                  }`}
               ></img>
            </div>
            <div className={Style.title}>{[<span key={2}>{children?.data.title[0]}</span>, <span key={1} style={{"color":"#905cf9"}}>{children?.data.title[1]}</span>,children?.data.title[2]||'Title']}</div>
            <div className={Style.content}>
               {[<span key={2}>{children?.data.contentString[0]}</span>,<span key={1} style={{"color":"#905cf9"}}>{children?.data.contentString[1]}</span>,children?.data.contentString[2]|| 'content']}
            </div>
            <div className={Style.date}>{`${
               children?.data.date || '01/01/1991'
            }`}</div>
         </div>
      </>
   );
}
