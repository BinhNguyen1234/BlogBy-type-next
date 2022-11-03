import { ReactElement, useState } from 'react';
import Style from '../../styles/components/PreviewBlog/PreviewBlogContainer.module.sass';
import Link from 'next/link';
import PreviewBlogChild from './PreviewBlogChild';
import { useDispatch } from 'react-redux';
import { SEND } from '../../feature/handleProgressBar';
interface Props {
   children?: Array<Object> | string[] | null;
   className?: string;
}
export default function PreviewBlogContainer({
   children,
   className,
}: Props): ReactElement {
   const dispatch = useDispatch();
   const setProgressBarSEND = () => {
      dispatch(SEND(null));
   };
   return (
      <>
         <ul id={Style.PreviewBlogContainer}>
            {children ? (
               children.map((data: any) => {
                  return (
                     <>
                        <Link key={data.url} href={`/blog/${data.url}`}>
                           <a className={Style.Wrapper} onClick={setProgressBarSEND}>
                              <PreviewBlogChild className={className}>
                                 {{ data }}
                              </PreviewBlogChild>
                           </a>
                        </Link>
                     </>
                  );
               })
            ) : (
               <PreviewBlogChild className={className}>{}</PreviewBlogChild>
            )}
         </ul>
      </>
   );
}
