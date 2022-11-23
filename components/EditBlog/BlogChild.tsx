import { ReactElement } from 'react';
import InforBlog from './InforBlog';
import ModifyBtn from './ModifyBtn';
import Style from '../../styles/components/EditBlog/BlogChild.module.sass';
export interface InforType {
   data: {
      title: string | string[];
      date: string;
      url: string;
      contentString: string | string[];
   };
   isLoading: boolean;
   id?: string
}

export default function BlogChild({
   data,
   isLoading,
   id,
}: InforType): ReactElement {
   return (
      <>
         <li id={id} className={Style.BlogChild}>
            <InforBlog isLoading={isLoading} data={data}></InforBlog>
            <ModifyBtn url={data.url}></ModifyBtn>
         </li>
      </>
   );
}
