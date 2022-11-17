import { ReactElement } from 'react';
import { InforType } from './BlogChild';
import Link from 'next/link';
import Style from '../../styles/components/EditBlog/InforBlog.module.sass';
export default function InforBlog({
   data,
   isLoading,
}: InforType): ReactElement {
   return (
      <>
         <div className={isLoading ? '--skeleton' : ''}>
            <Link href={`editblog/post?url=${data.url}`}>
               <a style={{ textDecorationLine: 'none' }}>
                  <div
                     style={{ width: '100%' }}
                     className={Style.InforBlogTitle}
                  >
                     {[
                        data.title[0],
                        <span
                           key={1}
                           style={{ color: 'black', backgroundColor: 'yellow' }}
                        >
                           {data.title[1]}
                        </span>,
                        data.title[2],
                     ]}
                  </div>
                  <div
                     style={{ width: '100%' }}
                     className={Style.InforBlogContent}
                  >
                     {[
                        <span key={2}>{[data.contentString[0],<span
                           key={1}
                           style={{ color: 'black', backgroundColor: 'yellow' }}
                           id={Style.HightLightWord}
                        >
                           {data.contentString[1]}
                        </span>,]}</span>,
                        
                        <span key={3}>{data.contentString[2]}</span>,
                     ]}
                  </div>
               </a>
            </Link>
            <div>{data.date}</div>
         </div>
      </>
   );
}
