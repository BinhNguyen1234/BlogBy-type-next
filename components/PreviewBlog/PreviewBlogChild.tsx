import dynamic from 'next/dynamic';
import { CSSProperties, ReactElement, useEffect, useRef } from 'react';
import Style from '../../styles/components/PreviewBlog/PreviewBlogChild.module.sass';
const Image = dynamic(() => import('../PreviewBlog/ImageSSR'), { ssr: false });
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
            <div className={Style.img_container + ' set'}>
               <Image
                  src={`${
                     children?.data.imgThumbnail ||
                     '/external/404-not-found-error.jpeg'
                  }`}
               ></Image>
            </div>
            <div className={Style.title + ' set'}>
               {[
                  <span key={2}>{children?.data.title[0]}</span>,
                  <span key={1} style={{ color: '#905cf9' }}>
                     {children?.data.title[1]}
                  </span>,
                  children?.data.title[2],
               ]}
            </div>
            <div className={Style.content + ' set'}>
               {[
                  <span key={2}>
                     {[
                        children?.data.contentString[0],
                        <span
                           key={1}
                           className={Style.HighLightWord}
                           style={{
                              color: '#905cf9',
                              float: 'none',
                              maxWidth: 'none',
                              whiteSpace: 'nowrap',
                              overflow: 'initial',
                              textOverflow: 'initial',
                              direction: 'ltr',
                           }}
                        >
                           {children?.data.contentString[1]}
                        </span>,
                     ]}
                  </span>,

                  <span key={3}>{children?.data.contentString[2]}</span>,
               ]}
            </div>
            <div className={Style.date + ' set'}>{`${
               children?.data.date || '01/01/1991'
            }`}</div>
         </div>
      </>
   );
}
