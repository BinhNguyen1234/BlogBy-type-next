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
               <a style={{ textDecorationLine: 'none', marginBottom: "4px"}}>
                  <div
                     style={{ width: '100%',marginBottom: "4px" }}
                     className={Style.InforBlogTitle + " set"}
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
                     style={{ width: '100%',marginBottom: "4px" }}
                     className={Style.InforBlogContent +" set"}
                  >
                     {[
                        <span key={2}>
                           {[
                              data.contentString[0],
                              <span
                                 key={1}
                                 style={{
                                    color: 'black',
                                    backgroundColor: 'yellow',
                                    float: 'none',
                                    maxWidth: 'none',
                                    whiteSpace: 'nowrap',
                                    overflow: 'initial',
                                    textOverflow: 'initial',
                                    direction: 'ltr',
                                 }}
                                 className={Style.HightLightWord}
                              >
                                 {data.contentString[1]}
                              </span>,
                           ]}
                        </span>,

                        <span key={3}>{data.contentString[2]}</span>,
                     ]}
                  </div>
               </a>
            </Link>
            <div style={{color: "rgb(106,76,67)"}} className="set">{data.date}</div>
         </div>
      </>
   );
}
