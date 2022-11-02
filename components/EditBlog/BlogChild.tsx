import { ReactElement } from 'react';
import InforBlog from './InforBlog';
import ModifyBtn from './ModifyBtn';
import Style from '../../styles/components/EditBlog/BlogChild.module.sass';
export interface InforType {
   data: {
      title: string;
      date: string;
      url: string;
   };
   isLoading: boolean;
}

export default function BlogChild({
   data,
   isLoading,
}: InforType): ReactElement {
   return (
      <>
         <li className={Style.BlogChild}>
            <InforBlog isLoading={isLoading} data={data}></InforBlog>
            <ModifyBtn url={data.url}></ModifyBtn>
         </li>
      </>
   );
}
