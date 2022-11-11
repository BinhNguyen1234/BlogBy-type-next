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
                  <div className={Style.InforBlogTitle}>
                     <span>{data.title[0]}</span>
                     <span style={{"color": "black", "backgroundColor":"yellow"}}>{data.title[1]}</span>
                     <span>{data.title[2]}</span>
                  </div>
               </a>
            </Link>
            <div>{data.date}</div>
         </div>
      </>
   );
}
